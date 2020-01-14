import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: grid;
  margin-bottom: 16px;
  align-items: center;
  grid-column-gap: 8px;
  grid-row-gap: 4px;
  grid-template-columns: 32px auto auto 32px;
  grid-template-rows: 16px 12px;
  grid-template-areas: 
    "icon title detail button"
    "icon subtitle detail button";
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

const Button = styled.button`
  padding: 0;
  grid-area: button;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.5;
  text-align: center;
  background-color: transparent;
  border: 0;
`

export default props => (
  <Row>
    <Icon>{props.icon}</Icon>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Detail>{props.detail}</Detail>
    <Button onClick={props.onDelete}>
      <span role="img" aria-label="delete">✖️</span>
    </Button>
  </Row>
)
