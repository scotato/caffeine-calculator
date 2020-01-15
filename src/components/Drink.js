import React, { useContext, useEffect } from 'react'
import { navigate } from "@reach/router"
import { Page, Title, Body, Actions } from './Layout'
import Button, { Link } from './Button'

import { ChartContext } from "./ChartContext"
import { DURATIONHOURS } from '../constants'
import { beverages } from '../data'
import { getTimestamp } from '../helpers'
import Label from './Label'
import Select from './Select'
import Range from './Range'

export default props => {
  const [state, setState] = useContext(ChartContext)
  const { drinks, doseAddEdit } = state
  const { id, drink, quantity, hour } = doseAddEdit
  const title = props.id ? "Edit Drink" : "Add Drink"
  const submitText = props.id ? "Save" : "Add"

  const setDrink = drink => setState({
    ...state, 
    doseAddEdit: {
      ...doseAddEdit,
      drink,
      quantity: drink.oz
    }
  })

  const setQuantity = quantity => setState({
    ...state, 
    doseAddEdit: {
      ...doseAddEdit,
      quantity
    }
  })

  const setHour = hour => setState({
    ...state, 
    doseAddEdit: {
      ...doseAddEdit,
      hour
    }
  })
  
  const saveDrink = () => {
    setState({
      ...state,
      drinks: [
        ...drinks.filter(dose => doseAddEdit.id !== dose.id), 
        doseAddEdit
      ]
    })
    navigate("/")
  }

  const removeDrink = () => {
    navigate("/")
    setState({
      ...state,
      drinks: drinks.filter(dose => props.id !== dose.id.toString())
    })
  }

  useEffect(() => {
    const drink = drinks.find(dose => dose.id.toString() === props.id)
    const shouldRedirect = props.id && !drink

    if (shouldRedirect) {
      navigate("/")
    } else {
      setState({
        ...state,
        doseAddEdit: drink || {
          id: new Date().getTime(),
          drink: beverages[0],
          quantity: beverages[0].oz,
          hour: 8
        }
      })
    }
  // eslint-disable-next-line
  }, [])

  return id ? (
    <Page>
      <Title>{title}</Title>
      
      <Body>
        <Label htmlFor="beverage">
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

        <Label htmlFor="quantity">
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

        <Label htmlFor="time">
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
      
      <Actions>
        <Link to="/">Cancel</Link>
        <Button onClick={saveDrink} type='success'>{submitText}</Button>
        {props.id && <Button onClick={removeDrink} type="danger">Delete</Button>}
      </Actions>
    </Page>
  ) : null
}
