import React, { useContext } from 'react'
import { Context } from "./Context"
import { Page, NavTitle, Body, Actions } from './Layout'
import { LinkButton } from './Button'
import Doses from './Doses'

export const HomeNav = () => <NavTitle>Caffeine Calculator</NavTitle>

export default () => {
  const { state, dispatch } = useContext(Context)
  const description = "Caffeine's biological half-life (the time required for the body to eliminate one-half of a dose) is between 3 and 7 hours."
  const Description = () => state.doses.length ? null : <p>{description}</p>

  return (
    <Page>
      <Body>
        <Doses />
        <Description />
      </Body>
      <Actions>
        <LinkButton type="info" to="add-dose" onClick={() => dispatch({type: 'setDose'})}>
          Add Dose
        </LinkButton>
      </Actions>
    </Page>
  )
}
