import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Chart from './Chart'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 18px;
  }
`

export default () => (
  <>
    <GlobalStyle />
    <Chart />
  </>
)
