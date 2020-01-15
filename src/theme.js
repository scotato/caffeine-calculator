import { css } from 'styled-components'

const color = {
  info: '#007bff',
  infoAlpha: 'hsla(211, 100%, 50%, 0.5)',
  success: '#1bc546',
  warning: '#ffc107',
  danger: '#dc3545',
}

const grayscale = {
  100: 'hsl(200, 10%, 95% )', 
  200: 'hsl(200, 10%, 92% )', 
  300: 'hsl(200, 10%, 90% )', 
  400: 'hsl(200, 10%, 85% )', 
  500: 'hsl(200, 10%, 50% )', 
  600: 'hsl(200, 10%, 40% )', 
  700: 'hsl(200, 10%, 30% )', 
  800: 'hsl(200, 10%, 15% )',
  900: 'hsl(200, 10%, 2.5% )' 
}

const size = {
  100: '2px', 
  200: '4px', 
  300: '8px', 
  400: '12px', 
  500: '16px', 
  600: '20px', 
  700: '32px', 
  800: '48px',
  900: '64px' 
}

const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
const fontFamilyMono = 'Source Code Pro, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'

const device = {
  desktopLarge: "1600px",
  desktop: "1280px",
  tabletHorizontal: "1024px",
  tabletVertical: "768px",
  phone: "414px",
  phoneSmall: "375px"
}

// Iterate through the sizes and create a media template
const media =  Object.keys(device).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${device[label]}) {
      ${css(...args)}
    }
  `

  return acc
}, {})

media["landscape"] = (...args) => css`
  @media (orientation:landscape) {
    ${css(...args)}
  }
`

media["portrait"] = (...args) => css`
  @media (orientation:portrait) {
    ${css(...args)}
  }
`

export default {
  color,
  grayscale,
  size,
  fontFamily,
  fontFamilyMono,
  media,
  device
}
