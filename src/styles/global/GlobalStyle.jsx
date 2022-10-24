import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Noto Sans JP';
    color: ${(props) => props.theme.COLORS.BLACK};
  }
`
export default GlobalStyle;