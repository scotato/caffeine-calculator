import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { DURATIONHOURS } from '../constants'
import { getDatasets, getHourLabels } from '../helpers'
import { beverages } from '../data'
import Button from './Button'
import Range from './Range'

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
      {isAdding ? (
        <div style={{display: 'flex'}}>
          <select
            value={drink.title}
            onChange={e => {
              const drinkNew = beverages.find(drink => drink.title === e.target.value)
              setDrink(drinkNew)
              setQuantity(drinkNew.oz)
            }}
          >
            {beverages.map(d =>
              <option key={d.title} value={d.title}>
                {d.title}
              </option>
            )}
          </select>

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

          <Button onClick={addDrink}>Add</Button>
          <Button onClick={setDefaults}>Cancel</Button>
        </div>
      ) : (
        <>
          {drinks.map(dose => (
            <>
              <span>{dose.drink.title} {dose.quantity}oz at {dose.hour}h</span>
              <Button onClick={() => removeDrink(dose)}>x</Button>
            </>
          ))}
          <Button onClick={() => setIsAdding(true)}>Add Drink</Button>
        </>
      )}
    </>
  )
}

export default Chart
