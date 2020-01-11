import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { DURATIONHOURS } from '../constants'
import { getDatasets, getHourLabels } from '../helpers'
import { beverages } from '../data'

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
          datasets: getDatasets(drinks)
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

          <input
            type="range"
            name="quantity"
            value={quantity}
            min={drink.min}
            max={drink.max}
            step={drink.step}
            onChange={e => setQuantity(e.target.value)}
          />

          <label for="quantity" style={{fontFamily: 'monospace'}}>{quantity}oz</label>
          
          <input
            type="range"
            name="hour"
            value={hour}
            min={1}
            max={DURATIONHOURS}
            step={1}
            onChange={e => setHour(e.target.value)}
          />

          <label for="hour" style={{fontFamily: 'monospace'}}>{hour}hr</label>
          <strong style={{fontFamily: 'monospace'}}>{drink.caffeine / drink.oz * quantity}mg caffeine</strong>

          <button onClick={addDrink}>Add</button>
          <button onClick={setDefaults}>Cancel</button>
        </div>
      ) : (
        <>
          {drinks.map(dose => (
            <>
              <span>{dose.drink.title} {dose.quantity}oz at {dose.hour}h</span>
              <button onClick={() => removeDrink(dose)}>x</button>
            </>
          ))}
          <button onClick={() => setIsAdding(true)}>Add Drink</button>
        </>
      )}
    </>
  )
}

export default Chart
