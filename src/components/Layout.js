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
  max-width: ${props => props.theme.device.desktopLarge};
  min-height: 100vh;
  box-sizing: border-box;

  ${props => props.theme.media.landscape`
    ${layoutLandscape}
  `}

  ${props => props.theme.media.portrait`
    ${layoutPortrait}
  `}

  ${props => props.theme.media.tabletVertical`
    ${layoutPortrait}
  `}
`

export const Page = styled.main`
  display: grid;
  padding: ${props => props.theme.size[700]};
  grid-area: page;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: ${props => props.theme.size[700]};
  grid-template-areas:
    "navbar"
    "body"
    "actions";
  height: 100%;
  box-sizing: border-box;

  ${props => props.theme.media.phoneSmall`
    padding: ${props => props.theme.size[500]};
  `}
`

export const Title = styled.h1`
  grid-area: navbar;
`

export const NavBar = styled.nav`
  display: grid;
  padding-bottom: ${props => props.theme.size[500]};
  grid-template-columns: 1fr 2fr 1fr;
  grid-area: navbar;
  align-items: baseline;
  border-bottom: ${props => props.theme.size[100]} solid ${props => props.theme.grayscale[200]};
`

export const Body = styled.div`
  display: flex;
  grid-area: body;
  flex-direction: column;
  flex-grow: 1;
  
  ${props => props.theme.media.phoneSmall`
    padding: 0 ${props => props.theme.size[500]};
  `}
`

export const Actions = styled.div`
  display: grid;
  grid-area: actions;
  grid-auto-flow: row;
  grid-row-gap: ${props => props.theme.size[500]};
`

export const Chart = styled.section`
  margin: ${props => props.theme.size[700]} ${props => props.theme.size[700]} ${props => props.theme.size[700]} 0;
  padding: ${props => props.theme.size[700]};
  grid-area: chart;
  max-width: calc(100vw - ${props => props.theme.size[900]});
  background-color: rgba(0, 0, 0, 0.025);
  border-radius: ${props => props.theme.size[500]};
  
  ${props => props.theme.media.phoneSmall`
    padding: ${props => props.theme.size[500]};
  `}
`

export default props => (
  <Layout>
    <Reset />
    <GlobalStyle />
    {props.children}
  </Layout>
)