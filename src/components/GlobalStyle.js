import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) =>
    reboot({
      black: theme.grayscale[900],
      fontFamilyBase: theme.fontFamily,
      fontFamilyMonospace: theme.fontFamilyMono,
      fontSizeBase: theme.size[600],
      fontWeightBase: 400,
      lineHeightBase: 1.6,
      bodyColor: theme.grayscale[900],
      bodyBg: 'white',
      headingsMarginBottom: theme.size[300],
      paragraphMarginBottom: theme.size[400],
      linkColor: theme.color.info,
      linkHoverColor: theme.color.info,
      linkHoverDecoration: 'none'
    })
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1;
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
