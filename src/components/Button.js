import React from 'react'
import styled, { css } from 'styled-components'
import { Link as LinkRouter } from "@reach/router"
import Icon from './Icon'

const backgroundColor = ({ type = 'default', theme }) => theme.color[type]
const color = ({ type = 'info', theme }) => theme.color[type]

const button = css`
  padding: ${props => props.theme.size[500]} ${props => props.theme.size[600]};
  color: white;
  font-size: inherit;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: ${backgroundColor};
  border-radius: ${props => props.theme.size[900]};
  user-select: none;
  border: 0;

  &:hover, &:active, &:focus {
    color: white;
  }
`

const text = css`
  padding: 0;
  border: 0;
  text-decoration: none;
  font-weight: 500;
  font-size: inherit;
  color: ${color};
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
