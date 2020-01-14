import React, { useContext } from 'react'
import { ChartContext } from "./ChartContext";
import { DURATIONHOURS } from '../constants'
import { beverages } from '../data'
import { getTimestamp } from '../helpers'
import { Body  } from './Layout'
import Row from './Row'
import Label from './Label'
import Select from './Select'
import Range from './Range'

export default () => {
  const [state, setState] = useContext(ChartContext)
  const { isAdding, drinks, drink, quantity, hour } = state

  const setQuantity = quantity => setState({ ...state, quantity })
  const setHour = hour => setState({ ...state, hour })
  const setDrink = drink => setState({
    ...state,
    drink,
    quantity: drink.oz
  })

  const removeDrink = doseToRemove => setState({
    ...state,
    drinks: drinks.filter(dose => doseToRemove.id !== dose.id)
  })

  return (
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
            isSearchable={false}
            value={{value: drink.title, label: `${drink.icon} ${drink.title}`}}
            onChange={option => {
              const drinkNew = beverages.find(beverage => beverage.title === option.value)
              setDrink(drinkNew)
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
  )
}
