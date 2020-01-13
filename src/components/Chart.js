import React, { useState } from 'react'
import styled from 'styled-components'

import { DURATIONHOURS } from '../constants'
import { getDatasets, getHourLabels, getTimestamp } from '../helpers'
import { beverages } from '../data'

import { Line } from 'react-chartjs-2'
import Label from './Label'
import Select from './Select'
import Range from './Range'
import Button from './Button'

const Controls = styled.div`
  display: flex;  
  flex-direction: column;
`

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 16px;
`

const Body = styled.div`
  display: flex;
  padding: 16px 0;
  flex-direction: column;
  flex-grow: 1;
`

const Beverage = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 16px;
  align-items: center;
  justify-self: flex-start;
`

const Layout = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 32px;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 32px;
  max-width: 1680px;
  height: 100%;
  box-sizing: border-box;
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
      <Controls>
        <h1>Caffeine Calculator</h1>

        {isAdding ? (
          <>
            <Body>
              <Label for="beverage">
                <span>Beverage</span>
                <strong>{drink.caffeine / drink.oz * quantity}mg</strong>
              </Label>

              <Select
                value={{value: drink.title, label: `${drink.icon} ${drink.title}`}}
                onChange={option => {
                  const drinkNew = beverages.find(beverage => beverage.title === option.value)
                  setDrink(drinkNew)
                  setQuantity(drinkNew.oz)
                }}
                options={beverages.map(beverage => (
                  {value: beverage.title, label: `${beverage.icon} ${beverage.title}`}
                ))}
                name="beverage"
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
            </Body>
            
            <Buttons>
              <Button onClick={setDefaults} type='warning'>Cancel</Button>
              <Button onClick={addDrink} type='success'>Add</Button>
            </Buttons>
          </>
        ) : (
          <>
            <Body>
              {drinks.map(dose => (
                <Beverage>
                  <span>{dose.drink.title} {dose.quantity}oz at {dose.hour}h</span>
                  <Button onClick={() => removeDrink(dose)} type='danger'>x</Button>
                </Beverage>
              ))}
            </Body>

            <Buttons>
              <Button
                onClick={() => setIsAdding(true)}
                type='info'
              >Add Drink</Button>
            </Buttons>
          </>
        )}
      </Controls>

      <div>
        <Line
          data={{
            labels: getHourLabels(),
            datasets: getDatasets(isAdding ? [...drinks, { drink, quantity, hour, id: new Date().getTime() }] : drinks)
          }}
          options={{
            maintainAspectRatio: false,
            tooltips: {
              callbacks: {
                  title: item => getTimestamp(item[0].xLabel),
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
      </div>
    </Layout>
  )
}

export default Chart
