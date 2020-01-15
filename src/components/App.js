import React from 'react'
import { Redirect } from "@reach/router"
import { ThemeProvider } from 'styled-components'
import { ContextProvider } from "./Context"
import Layout, { NavRouter, PageRouter } from './Layout'
import Home, { HomeNav } from './Home'
import Drink, { DrinkNav } from './Drink'
import Chart from './Chart'
import theme from '../theme'

const NotFound = () => <Redirect to="/" />

export default () => (
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <Layout>
        <NavRouter>
          <HomeNav path="/" />
          <DrinkNav path="add-drink" />
          <DrinkNav path="edit-drink/:id" />
        </NavRouter>

        <PageRouter>
          <Home path="/" />
          <Drink path="add-drink" />
          <Drink path="edit-drink/:id" />
          <NotFound default />
        </PageRouter>

        <Chart />
      </Layout>
    </ContextProvider>
  </ThemeProvider>
)
