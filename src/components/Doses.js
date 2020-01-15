import React, { useContext } from 'react'
import { Context } from "./Context"
import { getTimestamp } from '../helpers'
import DoseRow from './DoseRow'

export default () => {
  const { state } = useContext(Context)

  return state.doses.sort((a, b) => a.hour - b.hour).map(dose => (
    <DoseRow
      key={dose.id}
      icon={dose.drink.icon}
      title={dose.drink.title}
      subtitle={`${dose.quantity}oz at ${getTimestamp(dose.hour)}`}
      detail={`+${dose.drink.caffeine / dose.drink.oz * dose.quantity}mg`}
      to={`edit-dose/${dose.id}`}
    />
  ))
}
