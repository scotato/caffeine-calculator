import React, { useContext } from 'react'
import { Context } from "./Context"
import { Page, NavTitle, Body, Actions } from './Layout'
import { LinkButton } from './Button'
import Doses from './Doses'

export const HomeNav = () => <NavTitle>Caffeine Calculator</NavTitle>

export default () => {
  const { state, dispatch } = useContext(Context)

  return (
    <Page>
      <Body>
        <Doses />
        {!state.doses.length && (
          <>
            <p>Caffeine's biological half-life (the time required for the body to eliminate one-half of a dose) is between 3 and 7 hours.</p>
            <p><a href="https://en.wikipedia.org/wiki/Caffeine#Adverse_effects" target="_blank" rel="noopener noreferrer">Adverse Effects of Caffeine</a></p>
            <p><a href="https://github.com/scotato/caffeine-calculator" target="_blank" rel="noopener noreferrer">Source Code</a></p>
            <p><a href="https://twitter.com/scotato" target="_blank" rel="noopener noreferrer">Twitter</a></p>
          </>
        )}
      </Body>
      <Actions>
        <LinkButton type="info" to="add-dose" onClick={() => dispatch({type: 'setDose'})}>
          Add Dose
        </LinkButton>
      </Actions>
    </Page>
  )
}
