import React, { useContext, useEffect } from 'react'
import { navigate } from "@reach/router"
import { Context } from "./Context"
import { DURATIONHOURS } from '../constants'
import { beverages } from '../data'
import { getTimestamp } from '../helpers'

import { Page, Body, Actions } from './Layout'
import Button, { TextButton, BackButton } from './Button'
import NavBar from './NavBar'
import Label from './Label'
import Select from './Select'
import Range from './Range'

export default props => {
  const { state, dispatch } = useContext(Context)
  const { drinks, drink, quantity, hour } = state
  const submitText = props.id ? "Save" : "Add"

  useEffect(() => {
    const dose = drinks.find(dose => dose.id.toString() === props.id)
    const shouldRedirect = props.id && !dose

    if (shouldRedirect) {
      navigate("/")
    } else {
      dispatch({type: 'setDose', payload: dose})
      dispatch({type: 'setIsAddEdit', payload: true})
    }

    // clear doseAddEdit on unmount
    return () => dispatch({type: 'setIsAddEdit', payload: false})

  // eslint-disable-next-line
  }, [])

  return (
    <Page>
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
            dispatch({type: 'setDrink', payload: drinkNew})
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
          onChange={e => dispatch({type: 'setQuantity', payload: e.target.value})}
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
          onChange={e => dispatch({type: 'setHour', payload: e.target.value})}
        />
      </Body>
      
      <Actions>
        <Button
          onClick={() => {
            dispatch({type: 'saveDose'})
            navigate("/")
          }}
          type='success'
        >{submitText}</Button>
      </Actions>
    </Page>
  )
}

export const DrinkNav = props => {
  const { dispatch } = useContext(Context)
  const title = props.id ? "Edit Drink" : "Add Drink"

  const removeDose = () => {
    navigate("/")
    dispatch({type: 'removeDose', payload: props.id})
  }

  return (
    <NavBar
      title={title}
      primaryAction={<BackButton />}
      secondaryAction={props.id && (
        <TextButton onClick={removeDose} type="danger">Delete</TextButton>
      )}
    />
  )
}
