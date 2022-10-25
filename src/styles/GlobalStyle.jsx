import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: ${({ theme }) => theme.FONT_SIZE.M};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
    font-family: ${({ theme }) => theme.FONT_FAMILY};
    color: ${(props) => props.theme.COLORS.BLACK};
  }
`
