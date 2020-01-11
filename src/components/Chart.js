import React, { useState } from 'react'
import styled from 'styled-components'
import { DURATIONHOURS } from '../constants'
import { getDatasets, getHourLabels } from '../helpers'
import { beverages } from '../data'

import { Line } from 'react-chartjs-2'
import Select from './Select'
import Button from './Button'
import Range from './Range'

const Controls = styled.div`
  display: grid;
  margin-top: 16px;
  padding: 0 32px;
  grid-auto-flow: column;
  grid-column-gap: 16px;
  align-items: center;
`

const Beverage = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 16px;
  align-items: center;
  justify-self: flex-start;
`

const Chart = () => {
  const options = {}
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
    <>
      <Line
        options={options}
        data={{
          labels: getHourLabels(),
          datasets: getDatasets(isAdding ? [...drinks, { drink, quantity, hour, id: new Date().getTime() }] : drinks)
        }}
      />
      <Controls>
        {isAdding ? (
          <>
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
              menuPlacement="top"
            />

            <Range
              name="quantity"
              value={quantity}
              min={drink.min}
              max={drink.max}
              step={drink.step}
              onChange={e => setQuantity(e.target.value)}
            />

            <label for="quantity" style={{fontFamily: 'monospace'}}>{quantity}oz</label>
            
            <Range
              name="hour"
              value={hour}
              min={1}
              max={DURATIONHOURS}
              step={1}
              onChange={e => setHour(e.target.value)}
            />

            <label for="hour" style={{fontFamily: 'monospace'}}>{hour}hr</label>
            <strong style={{fontFamily: 'monospace'}}>{drink.caffeine / drink.oz * quantity}mg caffeine</strong>

            <Button onClick={addDrink} type='success'>Add</Button>
            <Button onClick={setDefaults} type='warning'>Cancel</Button>
          </>
        ) : (
          <>
            {drinks.map(dose => (
              <Beverage>
                <span>{dose.drink.title} {dose.quantity}oz at {dose.hour}h</span>
                <Button onClick={() => removeDrink(dose)} type='danger'>x</Button>
              </Beverage>
            ))}
            <Button
              onClick={() => setIsAdding(true)}
              type='info'
              style={{justifySelf: 'flex-end'}}
            >Add Drink</Button>
          </>
        )}
      </Controls>
    </>
  )
}

export default Chart
