import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const getNextHour = hour => (
  hour < 12 ? ++hour : ++hour - 12
)

const getTimeline = (start = 7, duration = 24) => {
  let timeline = [ start ]

  while (timeline.length < duration) {
    let current = timeline[ timeline.length - 1 ]
    let next = getNextHour(current)
    timeline.push(next)
  }

  return timeline
}

const getHalflife = (total, time, halflife = 5.7) => (
  total * Math.pow(0.5, (time / halflife))
)

const getHalflifeData = data => {
  let total = 0
  return data.map((val, i) => {
    const halflife = getHalflife(total, 1) // 1 hour increment
    total = val ? halflife + val : halflife
    return total
  })
}

const getCaffeineData = (intake = {}, duration = 24) => {
  let data = []

  while (data.length < duration) {
    data.push(0)
  }

  Object.keys(intake).map(hour => data[hour] = intake[hour])

  return {
    label: 'caffeine',
    data: getHalflifeData(data)
  }
}

// https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/caffeine/art-20049372

// Coffee drinks	Size in oz. (mL)	Caffeine (mg)
// Brewed	8 (237)	95-165 = 130
// Espresso	1 (30)	47-64 = 56
// Instant	8 (237)	63
// Latte or mocha	8 (237)	63-126 = 95

// Teas	Size in oz. (mL)	Caffeine (mg)
// Brewed black	8 (237)	25-48 = 37
// Brewed green	8 (237)	25-29 = 27
// bottled	8 (237)	5-40 = 23

// Sodas	Size in oz. (mL)	Caffeine (mg)
// Cola	8 (237)	24-46 = 35

// Energy drinks	Size in oz. (mL)	Caffeine (mg)
// Energy drink	8 (237)	27-164 = 100
// Energy shot	1 (30)	40-100 = 70

// https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/caffeine/art-20045678
// Up to 400 milligrams (mg) of caffeine a day appears to be safe for most healthy adults. That's roughly the amount of caffeine in four cups of brewed coffee, 10 cans of cola or two "energy shot" drinks. Keep in mind that the actual caffeine content in beverages varies widely, especially among energy drinks.

// TODO: add interface for user to add a drink
// struct { category: enum, size: oz, caffeine: mg, time: 24h }
// add dose
// remove dose

const drinkTypes = [
  {
    title: "Coffee",
    caffeine: 130,
    oz: 8,
    min: 8,
    max: 32,
    step: 4
  },
  {
    title: "Espresso",
    caffeine: 60,
    oz: 1,
    min: 1,
    max: 4,
    step: 1
  },
  {
    title: "Latte",
    caffeine: 100,
    oz: 8,
    min: 8,
    max: 20,
    step: 4
  },
  {
    title: "Black Tea",
    caffeine: 40,
    oz: 8,
    min: 8,
    max: 20,
    step: 4
  },
  {
    title: "Green Tea",
    caffeine: 30,
    oz: 8,
    min: 8,
    max: 20,
    step: 4
  },
  {
    title: "Energy Drink",
    caffeine: 100,
    oz: 8,
    min: 8,
    max: 32,
    step: 4
  },
  {
    title: "Energy Shot",
    caffeine: 70,
    oz: 1,
    min: 1,
    max: 4,
    step: 1
  },
]

const Chart = () => {
  const options = {}
  const defaultDrink = drinkTypes[0]
  const [drink, setDrink] = useState(defaultDrink)
  const [drinks, setDrinks] = useState([])
  const [quantity, setQuantity] = useState(defaultDrink.oz)
  const [hour, setHour] = useState(8)
  const [isAdding, setIsAdding] = useState(false)
  const [labels, setLabels] = useState(getTimeline())
  const [intake, setIntake] = useState({4: 200, 5: 100})
  const [datasets, setDatasets] = useState([getCaffeineData(intake)])

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
    setDrinks(drinks.filter(dose => doseToRemove.id != dose.id))
  }

  return (
    <>
      <Line
        options={options}
        data={{
          labels,
          datasets
        }}
      />
      {isAdding ? (
        <div style={{display: 'flex'}}>
          <select
            value={drink.title}
            onChange={e => {
              const drinkNew = drinkTypes.find(drink => drink.title === e.target.value)
              setDrink(drinkNew)
              setQuantity(drinkNew.oz)
            }}
          >
            {drinkTypes.map(d =>
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
            max={24}
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
