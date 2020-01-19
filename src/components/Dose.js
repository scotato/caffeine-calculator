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
import Select, { LabelEmoji } from './Select'
import Slider from './Slider'
import Emoji from './Emoji'

export default props => {
  const { state, dispatch } = useContext(Context)
  const { doses, drink, quantity, hour } = state
  const submitText = props.id ? "Save" : "Add"

  useEffect(() => {
    const dose = doses.find(dose => dose.id.toString() === props.id)
    const shouldRedirect = props.id && !dose

    if (shouldRedirect) {
      navigate("/")
    } else {
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
          isSearchable={false}
          value={{
            value: drink.title, 
            label: (
              <LabelEmoji>
                <Emoji name={drink.emoji} />
                <span>{drink.title}</span>
              </LabelEmoji>
            )
          }}
          onChange={option => {
            const drinkNew = beverages.find(beverage => beverage.title === option.value)
            dispatch({type: 'setDrink', payload: drinkNew})
          }}
          options={beverages.map(beverage => ({
            value: beverage.title, 
            label: (
              <LabelEmoji>
                <Emoji name={beverage.emoji} />
                <span>{beverage.title}</span>
              </LabelEmoji>
            )}
          ))}
        />

        <Label htmlFor="quantity">
          <span>Quantity</span>
          <strong>{quantity}oz</strong>
        </Label>
        
        <Slider
          name="quantity"
          value={quantity}
          min={drink.min}
          max={drink.max}
          step={drink.step}
          onChange={payload => dispatch({type: 'setQuantity', payload })}
          dots
        />

        <Label htmlFor="time">
          <span>Time</span>
          <strong>{getTimestamp(hour)}</strong>
        </Label>
        
        <Slider
          name="time"
          value={hour}
          min={1}
          max={DURATIONHOURS}
          step={1}
          onChange={payload => dispatch({type: 'setHour', payload })}
          dots
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

export const DoseNav = props => {
  const { dispatch } = useContext(Context)
  const title = props.id ? "Edit Dose" : "Add Dose"

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
