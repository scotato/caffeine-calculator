import React from 'react'
import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components'
import { ChartProvider } from "./ChartContext";
import GlobalStyle from './GlobalStyle'
import Layout, { Title } from './Layout'
import Body from './Body'
import Actions from './Actions'
import Chart from './Chart'
import theme from '../theme'

export default () => (
  <ThemeProvider theme={theme}>
    <Reset />
    <GlobalStyle />
    <ChartProvider>
      <Layout>
        <Title>Caffeine Calculator</Title>
        <Body />
        <Actions />
        <Chart />
      </Layout>
    </ChartProvider>
  </ThemeProvider>
)
