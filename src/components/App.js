import React from 'react'
import { Redirect } from "@reach/router"
import { ThemeProvider } from 'styled-components'
import { ContextProvider } from "./Context"
import Layout, { NavRouter, PageRouter } from './Layout'
import Home, { HomeNav } from './Home'
import Dose, { DoseNav } from './Dose'
import Chart from './Chart'
import theme from '../theme'

const NotFound = () => <Redirect to="/" />

export default () => (
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <Layout>
        <NavRouter>
          <HomeNav path="/" />
          <DoseNav path="add-dose" />
          <DoseNav path="edit-dose/:id" />
        </NavRouter>

        <PageRouter>
          <Home path="/" />
          <Dose path="add-dose" />
          <Dose path="edit-dose/:id" />
          <NotFound default />
        </PageRouter>

        <Chart />
      </Layout>
    </ContextProvider>
  </ThemeProvider>
)
