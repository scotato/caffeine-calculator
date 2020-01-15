import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${props => props.theme.size[600]};
    font-family: ${props => props.theme.fontFamily};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  h1 {
    font-size: ${props => props.theme.size[800]};
  }

  h2 {
    font-size: ${props => props.theme.size[700]};
  }

  h3 {
    font-size: ${props => props.theme.size[600]};
  }

  h4 {
    font-size: ${props => props.theme.size[500]};
  }

  h5 {
    font-size: ${props => props.theme.size[400]};
  }

  h6 {
    font-size: ${props => props.theme.size[300]};
  }

  strong {
    font-weight: 700;
  }
`

export default GlobalStyle
