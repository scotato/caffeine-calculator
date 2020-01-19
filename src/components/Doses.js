import React, { useContext } from 'react'
import { Context } from "./Context"
import { getTimestamp } from '../helpers'
import DoseRow from './DoseRow'

export default () => {
  const { state, dispatch } = useContext(Context)

  return state.doses.sort((a, b) => a.hour - b.hour).map(dose => (
    <DoseRow
      key={dose.id}
      emoji={dose.drink.emoji}
      title={dose.drink.title}
      subtitle={`${dose.quantity}oz at ${getTimestamp(dose.hour)}`}
      detail={`+${dose.drink.caffeine / dose.drink.oz * dose.quantity}mg`}
      onClick={() => dispatch({type: 'setDose', payload: dose})}
      to={`edit-dose/${dose.id}`}
    />
  ))
}
