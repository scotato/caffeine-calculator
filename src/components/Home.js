import React from 'react'
import { Page, NavTitle, Body, Actions } from './Layout'
import { LinkButton } from './Button'
import Drinks from './Drinks'

export const HomeNav = () => <NavTitle>Caffeine Calculator</NavTitle>

export default () => (
  <Page>
    <Body>
      <Drinks />
    </Body>
    <Actions>
      <LinkButton to="add-drink" type="info">
        Add Drink
      </LinkButton>
    </Actions>
  </Page>
)
