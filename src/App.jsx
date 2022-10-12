import React from 'react'
import { Top } from 'pages/Top'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import 'styles/reset.css'

const App = () => {
  return (
    // React.Fragmentは、DOMに追加されない空のタグ。<></>と書くこともできる。
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Top />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
