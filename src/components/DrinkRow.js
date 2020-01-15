import React from 'react'
import styled from 'styled-components'
import { Link } from "@reach/router"
import Icon from "./Icon"

const DrinkRow = styled(Link)`
  display: grid;
  padding: 16px 0;
  align-items: center;
  grid-column-gap: 12px;
  grid-row-gap: 4px;
  grid-template-columns: 32px auto auto 24px;
  grid-template-rows: 16px 12px;
  grid-template-areas: 
    "emoji title detail icon"
    "emoji subtitle detail icon";
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  border-bottom: 2px solid ${props => props.theme.colors.defaultUltraLight};

  &:last-child {
    border-bottom: 0;
  }
`

const Emoji = styled.div`
  grid-area: emoji;
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

const IconRight = styled.div`
  display: grid;
  grid-area: icon;
  color: ${props => props.theme.colors.defaultLight};
  place-items: center;
`

export default props => (
  <DrinkRow to={props.to}>
    <Emoji>{props.icon}</Emoji>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Detail>{props.detail}</Detail>
    <IconRight>
      <Icon name="chevron-right" />
    </IconRight>
  </DrinkRow>
)