import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from "./Context"
import { getTimestamp } from '../helpers'
import DoseRow from './DoseRow'
import Button from './Button'
import Label from './Label'

const Doses = styled.div`
  margin-bottom: ${props => props.theme.size[700]};
`

const DosesLabel = styled(Label)`
  display: grid;
  padding: 0 ${props => props.theme.size[400]};
  grid-template-columns: 1fr auto;
  align-items: center;
`
const DosesTitle = styled.h2`
  margin-bottom: 0;
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[500]};
  font-weight: 500;
`

const DoseList = styled.div`
  background-color: ${props => props.theme.grayscale[100]};
  border-radius: ${props => props.theme.size[500]};
`

export default () => {
  const { state, dispatch } = useContext(Context)
  const doses = state.doses.sort((a, b) => a.hour - b.hour)
  
  return doses.length ? (
    <Doses>
      <DosesLabel>
        <DosesTitle>Doses</DosesTitle>
        <Button
          type="danger"
          size="sm"
          onClick={() => dispatch({type: 'clearDoses'})}
        >Reset</Button>
      </DosesLabel>
      <DoseList>
        {doses.map(dose => (
          <DoseRow
            key={dose.id}
            emoji={dose.drink.emoji}
            title={dose.drink.title}
            subtitle={`${dose.quantity}oz at ${getTimestamp(dose.hour)}`}
            detail={`+${dose.drink.caffeine / dose.drink.oz * dose.quantity}mg`}
            onClick={() => dispatch({type: 'setDose', payload: dose})}
            to={`edit-dose/${dose.id}`}
          />
        ))}
      </DoseList>
    </Doses>
  ) : null
}