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
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 20px;
    ${({ theme }) => theme.media.pc`
      padding: 80px 20px;
    `}
  }
`
