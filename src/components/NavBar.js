import React from 'react'
import styled from 'styled-components'
import { NavBar } from './Layout'


const NavBarTitle = styled.h1`
  text-align: center;
  font-size: inherit;
`

const NavBarPrimary = styled.div`
  font-size: 16px;
`

const NavBarSecondary = styled.div`
  font-size: 16px;
  text-align: right;
`

export default props => (
  <NavBar>
    <NavBarPrimary>{props.primaryAction}</NavBarPrimary>
    <NavBarTitle>{props.title}</NavBarTitle>
    <NavBarSecondary>{props.secondaryAction}</NavBarSecondary>
  </NavBar>
)
