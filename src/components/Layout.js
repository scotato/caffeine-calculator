import React from 'react'
import styled, { css } from 'styled-components'
import { Reset } from 'styled-reset'
import GlobalStyle from './GlobalStyle'

const layoutLandscape = css`
  grid-template-columns: 1fr 2.5fr;
  grid-template-areas: "page chart";
`

const layoutPortrait = css`
  grid-template-rows: auto auto;
  grid-template-columns: initial;
  grid-template-areas:
    "chart"
    "page";
`

const Layout = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  max-width: 1680px;
  min-height: 100vh;
  box-sizing: border-box;

  @media (orientation:landscape) {
    ${layoutLandscape}
  }

  @media (orientation:portrait) {
    ${layoutPortrait}
  }

  @media (max-width: 768px) {
    ${layoutPortrait}
  }
`

export const Page = styled.main`
  display: grid;
  padding: 32px;
  grid-area: page;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 32px;
  grid-template-areas:
    "navbar"
    "body"
    "actions";
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 375px) {
    padding: 16px;
  }
`

export const Title = styled.h1`
  grid-area: navbar;
`

export const NavBar = styled.nav`
  display: grid;
  padding-bottom: 16px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-area: navbar;
  align-items: baseline;
  border-bottom: 2px solid ${props => props.theme.colors.defaultUltraLight};
`

export const Body = styled.div`
  display: flex;
  grid-area: body;
  flex-direction: column;
  flex-grow: 1;
  
  @media (max-width: 375px) {
    padding: 0 16px;
  }
`

export const Actions = styled.div`
  display: grid;
  grid-area: actions;
  grid-auto-flow: row;
  grid-row-gap: 16px;
`

export const Chart = styled.section`
  margin: 32px 32px 32px 0;
  padding: 32px;
  grid-area: chart;
  max-width: calc(100vw - 64px);
  background-color: rgba(0, 0, 0, 0.025);
  border-radius: 16px;
  
  @media (max-width: 375px) {
    padding: 16px;
  }
`

export default props => (
  <Layout>
    <Reset />
    <GlobalStyle />
    {props.children}
  </Layout>
)