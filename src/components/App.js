import React from 'react'
import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import Chart from './Chart'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
  }

  #root {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }
`

export default () => (
  <>
    <Reset />
    <GlobalStyle />
    <Chart />
  </>
)
