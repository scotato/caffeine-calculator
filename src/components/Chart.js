import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { DURATIONHOURS } from '../constants'
import { colors } from '../theme'
import { getDatasets, getHourLabels, getTimestamp } from '../helpers'
import { beverages } from '../data'

import { Line, defaults } from 'react-chartjs-2'
import Row from './Row'
import Label from './Label'
import Select from './Select'
import Range from './Range'
import Button from './Button'

defaults.global.defaultFontColor = colors.default
defaults.global.defaultFontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
defaults.global.defaultFontSize = 16

const layoutLandscape = css`
  grid-template-rows: initial;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  grid-template-areas:
  "title chart"
  "body chart"
  "actions chart";
`

const layoutPortrait = css`
  grid-template-rows: auto auto auto auto;
  grid-template-columns: initial;
  grid-row-gap: 32px;
  grid-template-areas:
    "title"
    "chart"
    "body"
    "actions";

    @media (max-width: 375px) {
      grid-row-gap: 16px;
    }
`

const Layout = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 32px;
  width: 100%;
  max-width: 1680px;
  box-sizing: border-box;

  @media (orientation:landscape) {
    ${layoutLandscape}
  }

  @media (orientation:portrait) {
    ${layoutPortrait}
  }

  @media (max-width: 768px) {
    ${layoutPortrait}
  }

  @media (max-width: 375px) {
    padding: 16px;
  }
`

const Title = styled.h1`
  grid-area: title;
`

const ChartWrapper = styled.main`
  grid-area: chart;
  max-width: calc(100vw - 64px);
`

const Body = styled.div`
  display: flex;
  grid-area: body;
  flex-direction: column;
  flex-grow: 1;
  
  @media (max-width: 375px) {
    padding: 0 16px;
  }
`

const Actions = styled.div`
  display: grid;
  grid-area: actions;
  grid-auto-flow: row;
  grid-row-gap: 16px;
`

const Chart = () => {
  const defaultDrink = beverages[0]
  const [drink, setDrink] = useState(defaultDrink)
  const [drinks, setDrinks] = useState([])
  const [quantity, setQuantity] = useState(defaultDrink.oz)
  const [hour, setHour] = useState(8)
  const [isAdding, setIsAdding] = useState(false)

  const setDefaults = () => {
    setDrink(defaultDrink)
    setQuantity(defaultDrink.oz)
    setHour(8)
    setIsAdding(false)
  }

  const addDrink = () => {
    setDrinks([...drinks, { drink, quantity, hour, id: new Date().getTime() }])
    setDefaults()
  }

  const removeDrink = doseToRemove => {
    setDrinks(drinks.filter(dose => doseToRemove.id !== dose.id))
  }

  return (
    <Layout>
      <Title>Caffeine Calculator</Title>

      <Body>
        {isAdding ? (
          <>
            <Label for="beverage">
              <span>Beverage</span>
              <strong>{drink.caffeine / drink.oz * quantity}mg</strong>
            </Label>

            <Select
              name="beverage"
              autoFocus={true}
              value={{value: drink.title, label: `${drink.icon} ${drink.title}`}}
              onChange={option => {
                const drinkNew = beverages.find(beverage => beverage.title === option.value)
                setDrink(drinkNew)
                setQuantity(drinkNew.oz)
              }}
              options={beverages.map(beverage => (
                {value: beverage.title, label: `${beverage.icon} ${beverage.title}`}
              ))}
            />

            <Label for="quantity">
              <span>Quantity</span>
              <strong>{quantity}oz</strong>
            </Label>
            
            <Range
              name="quantity"
              value={quantity}
              min={drink.min}
              max={drink.max}
              step={drink.step}
              onChange={e => setQuantity(e.target.value)}
            />

            <Label for="time">
              <span>Time</span>
              <strong>{getTimestamp(hour)}</strong>
            </Label>
            
            <Range
              name="time"
              value={hour}
              min={1}
              max={DURATIONHOURS}
              step={1}
              onChange={e => setHour(e.target.value)}
            />
          </>
        ) : (
          drinks.sort((a, b) => a.hour - b.hour).map(dose => (
            <Row
              icon={dose.drink.icon}
              title={dose.drink.title}
              subtitle={`${dose.quantity}oz at ${getTimestamp(dose.hour)}`}
              detail={`+${dose.drink.caffeine / dose.drink.oz * dose.quantity}mg`}
              onDelete={() => removeDrink(dose)}
            />
          ))
        )}
      </Body>

      <Actions>
        {isAdding ? (
          <>
            <Button onClick={setDefaults} type='default'>Cancel</Button>
            <Button onClick={addDrink} type='success'>Add</Button>
          </>
        ) : (
          <Button onClick={() => setIsAdding(true)} type='info'>Add Drink</Button>
        )}
      </Actions>

      <ChartWrapper>
        <Line
          data={{
            labels: getHourLabels(),
            datasets: getDatasets(isAdding ? [...drinks, { drink, quantity, hour, id: new Date().getTime() }] : drinks)
          }}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            tooltips: {
              callbacks: {
                  title: item => item[0].xLabel,
                  label: item => `${Math.round(item.yLabel)}mg`
              }
            },
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      callback: val => `${val}mg`
                  }
              }]
            }
          }}
        />
      </ChartWrapper>
    </Layout>
  )
}

export default Chart
