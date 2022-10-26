import { Top } from 'pages/Top'

import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

import 'styles/reset.css'
import { GlobalStyle } from 'styles/GlobalStyle'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Top />
    </ThemeProvider>
  )
}

export default App
