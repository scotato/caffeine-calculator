import React from 'react'
import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import Chart from './Chart'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 18px;
    height: 100vh;
  }

  #root {
    height: 100%;
  }
`

export default () => (
  <>
    <Reset />
    <GlobalStyle />
    <Chart />
  </>
)
