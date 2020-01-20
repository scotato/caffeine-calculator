import React from 'react'
import styled, { css } from 'styled-components'
import { Link as LinkRouter } from "@reach/router"
import Icon from './Icon'

const backgroundColor = ({ type = 'default', theme }) => theme.color[type]
const textColor = ({ type = 'info', theme }) => theme.color[type]
const color = ({ type = 'default', theme }) => {
  switch(type) {
    case "default":
      return theme.grayscale[600]
    default:
      return 'white'
  }
}

const padding = ({ size = 'md', theme }) => {
  switch(size) {
    case "sm":
      return `0 ${theme.size[400]}`
    case "md":
        return `${theme.size[400]} ${theme.size[500]}`
    case "lg":
        return `${theme.size[500]} ${theme.size[600]}`
    default:
      return 0
  }
}

const fontSize = ({ size = 'md', theme }) => {
  switch(size) {
    case "sm":
      return theme.size[400]
    case "md":
        return theme.size[500]
    case "lg":
        return theme.size[600]
    default:
      return "inherit"
  }
}

const button = css`
  padding: ${padding};
  color: ${color};
  font-size: ${fontSize};
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: ${backgroundColor};
  border-radius: ${props => props.theme.size[900]};
  user-select: none;
  border: 0;

  &:hover, &:active, &:focus {
    color: ${color};
  }
`

const text = css`
  padding: 0;
  border: 0;
  text-decoration: none;
  font-weight: 500;
  font-size: inherit;
  color: ${textColor};
  cursor: pointer;
`

export const TextButton = styled.button`
  ${text}
`

export const Link = styled(LinkRouter)`
  ${text}
`

export const LinkButton = styled(LinkRouter)`
  ${button}
`

const BackLink = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${props => props.theme.size[300]};
  align-items: baseline;

  svg {
    transform: scale(1.25);
  }
`

export const BackButton = () =>
  <BackLink to="../" replace>
    <Icon name="chevron-left" size={400} /> Back
  </BackLink>

export default styled.button`
  ${button}
`
