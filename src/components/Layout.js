import styled, { css } from 'styled-components'

const layoutLandscape = css`
  grid-template-rows: initial;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  grid-template-areas:
  "title chart"
  "body chart"
  "actions chart";
`

const layoutPortrait = css`
  grid-template-rows: auto auto auto auto;
  grid-template-columns: initial;
  grid-row-gap: 32px;
  grid-template-areas:
    "title"
    "chart"
    "body"
    "actions";

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

export const Chart = styled.main`
  grid-area: chart;
  max-width: calc(100vw - 64px);
`

export default Layout
