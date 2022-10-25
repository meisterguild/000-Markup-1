import React from 'react'
import { Top } from 'pages/Top'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import 'styles/reset.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Top />
    </ThemeProvider>
  )
}

export default App
