import React from 'react'
import styled, { css } from 'styled-components'
import { Reset } from 'styled-reset'
import GlobalStyle from './GlobalStyle'

const layoutLandscape = css`
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  grid-template-areas: "page chart";
`

const layoutPortrait = css`
  grid-template-rows: auto auto;
  grid-template-columns: initial;
  grid-row-gap: 32px;
  grid-template-areas:
    "chart"
    "page";

    @media (max-width: 375px) {
      grid-row-gap: 16px;
    }
`

const Layout = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 32px;
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

  @media (max-width: 375px) {
    padding: 16px;
  }
`

export const Page = styled.main`
  display: grid;
  grid-area: page;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 32px;
  grid-template-areas:
    "title"
    "body"
    "actions";
  height: 100%;
`

export const Title = styled.h1`
  grid-area: title;
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
  grid-area: chart;
  max-width: calc(100vw - 64px);
`

export default props => (
  <Layout>
    <Reset />
    <GlobalStyle />
    {props.children}
  </Layout>
)