import React from 'react'
import { Home } from 'pages/home'
import { SideMenu } from 'pages/sideMenu'
import { Footer } from 'pages/footer'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import 'styles/reset.css'

const App = () => {
  return (
    // React.Fragmentは、DOMに追加されない空のタグ。<></>と書くこともできる。
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <SSideMenu>
          <SideMenu />
        </SSideMenu>
        <SHome>
          <Home />
        </SHome>
        <SFooter>
          <Footer />
        </SFooter>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App

const SSideMenu = styled.div`
  position: fixed;
  z-index: 1;
`
const SHome = styled.div`
  position: fixed;
  left: 300px;
  height: 100svh;
  overflow: auto;
  width: 100%;
`

const SFooter = styled.div`
  height: 170px;
  position: fixed;
  left: 300px;
  bottom: 0;
  width: 100%;
  overflow: auto;
  background-color: #121212;
`
