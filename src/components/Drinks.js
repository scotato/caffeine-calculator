import React, { useContext } from 'react'
import { Context } from "./Context"
import { getTimestamp } from '../helpers'
import DrinkRow from './DrinkRow'

export default () => {
  const { state } = useContext(Context)

  return state.drinks.sort((a, b) => a.hour - b.hour).map(dose => (
    <DrinkRow
      key={dose.id}
      icon={dose.drink.icon}
      title={dose.drink.title}
      subtitle={`${dose.quantity}oz at ${getTimestamp(dose.hour)}`}
      detail={`+${dose.drink.caffeine / dose.drink.oz * dose.quantity}mg`}
      to={`edit-drink/${dose.id}`}
    />
  ))
}
