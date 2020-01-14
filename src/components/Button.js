import styled, { css } from 'styled-components'
import { Link as LinkRouter } from "@reach/router"

const backgroundColor = ({ type = 'default', theme }) => theme.colors[type]

const buttonStyle = css`
  padding: 16px 24px;
  color: white;
  font-size: inherit;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: ${backgroundColor};
  border-radius: 64px;
  border: 0;
`

export const Link = styled(LinkRouter)`
  ${buttonStyle}
`

export default styled.button`
  ${buttonStyle}
`
