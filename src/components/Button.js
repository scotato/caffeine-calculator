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
  border: 0;
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

export const BackButton = () =>
  <Link to="../">
    <Icon name="chevron-left" fixedWidth />Back
  </Link>

export default styled.button`
  ${button}
`
