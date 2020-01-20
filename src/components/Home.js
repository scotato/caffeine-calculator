import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from "./Context"
import { Page, NavTitle, Body, Actions } from './Layout'
import { LinkButton } from './Button'
import Doses from './Doses'

const Description = styled.p`
  margin-bottom: ${props => props.theme.size[700]};
`

export const HomeNav = () => <NavTitle>Caffeine Calculator</NavTitle>

export default () => {
  const { dispatch } = useContext(Context)

  return (
    <Page>
      <Body>
        <Description>Caffeine's biological half-life (the time required for the body to eliminate one-half of a dose) is between 3 and 7 hours.</Description>
        <Doses />
      </Body>
      <Actions>
        <LinkButton
          type="info"
          to="add-dose"
          size="lg"
          onClick={() => dispatch({type: 'setDose'})}
        >
          Add Dose
        </LinkButton>
      </Actions>
    </Page>
  )
}
