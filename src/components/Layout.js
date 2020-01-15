import React from 'react'
import styled, { css } from 'styled-components'
import { Router } from "@reach/router"
import GlobalStyle from './GlobalStyle'

const layoutLandscape = css`
  grid-template-columns: ${props => props.theme.device.phoneSmall} auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "navbar chart"
    "page chart";
`

const layoutPortrait = css`
  grid-template-rows: auto auto 1fr;
  grid-template-columns: auto;
  grid-template-areas:
    "navbar"
    "chart"
    "page";
`

const Layout = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.device.desktopLarge};
  min-height: 100vh;

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
  grid-template-rows: 1fr auto;
  grid-row-gap: ${props => props.theme.size[700]};
  grid-template-areas:
    "body"
    "actions";
  height: 100%;
  background-color: white;

  ${props => props.theme.media.phoneSmall`
    padding: ${props => props.theme.size[600]};
  `}
`

export const PageRouter = styled(Router)`
  grid-area: page;
`

export const NavRouter = styled(Router)`
  grid-area: navbar;
`

export const NavTitle = styled.h1`
  margin: 0;
  padding: ${props => props.theme.size[700]};
  background-color: white;
`

export const NavBar = styled.nav`
  display: grid;
  padding: ${props => props.theme.size[500]} ${props => props.theme.size[600]};
  grid-template-columns: 1fr 2fr 1fr;
  align-items: baseline;
  border-bottom: ${props => props.theme.size[100]} solid ${props => props.theme.grayscale[200]};
  font-size: ${props => props.theme.size[500]};
  background-color: white;
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
  padding: ${props => props.theme.size[700]};
  grid-area: chart;
  max-width: 100vw;
  background-color: ${props => props.theme.grayscale[100]};

  ${props => props.theme.media.phoneSmall`
    padding: ${props => props.theme.size[500]};
  `}
`

export default props => (
  <Layout>
    <GlobalStyle />
    {props.children}
  </Layout>
)