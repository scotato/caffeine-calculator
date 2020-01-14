import React from 'react'
import styled from 'styled-components'
import { Link } from "@reach/router"

const DrinkRow = styled(Link)`
  display: grid;
  margin-bottom: 16px;
  align-items: center;
  grid-column-gap: 8px;
  grid-row-gap: 4px;
  grid-template-columns: 32px auto auto;
  grid-template-rows: 16px 12px;
  grid-template-areas: 
    "icon title detail"
    "icon subtitle detail";
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`

const Icon = styled.div`
  grid-area: icon;
  font-size: 32px;
`

const Title = styled.div`
  grid-area: title;
  font-size: 16px;
`

const Subtitle = styled.div`
  grid-area: subtitle;
  font-size: 12px;
  color: ${props => props.theme.colors.default};
`

const Detail = styled.strong`
  grid-area: detail;
  justify-self: end;
  font-size: 12px;
  color: ${props => props.theme.colors.success};
`

export default props => (
  <DrinkRow to={props.to}>
    <Icon>{props.icon}</Icon>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Detail>{props.detail}</Detail>
  </DrinkRow>
)