import React from 'react'
import { Router, Redirect } from "@reach/router"
import { ThemeProvider } from 'styled-components'
import { ChartProvider } from "./ChartContext"
import Layout from './Layout'
import Home from './Home'
import Drink from './Drink'
import Chart from './Chart'
import theme from '../theme'

const NotFound = () => <Redirect to="/" />

export default () => (
  <ThemeProvider theme={theme}>
    <ChartProvider>
      <Layout>
        <Router>
          <Home path="/" />
          <Drink path="add-drink" />
          <Drink path="edit-drink/:id" />
          <NotFound default />
        </Router>
        <Chart />
      </Layout>
    </ChartProvider>
  </ThemeProvider>
)
