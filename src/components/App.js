import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Chart from './Chart'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    font-size: 18px;
  }
`

export default () => (
  <>
    <GlobalStyle />
    <Chart />
  </>
)
