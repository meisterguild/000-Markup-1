import React from 'react'
import { Home } from 'pages/home'
import { SideMenu } from 'pages/sideMenu'
import { Header } from 'pages/header'
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
        <SHeader>
          <Header />
        </SHeader>
        <SHome>
          <Home />
          <SFooter>
            <Footer />
          </SFooter>
        </SHome>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App

const SSideMenu = styled.div`
  top: 0;
  left: 0;
  width: 300px;
  z-index: 1;
  position: fixed;
  ${({ theme }) => theme.media.tb`
    display: none;
  `};
`

const SHeader = styled.div`
  display: none;
  ${({ theme }) => theme.media.tb`
  top: 0;
  display: block;
  left: 0;
  width: 100%;
  z-index: 10;
  position: fixed;
  height: 72px;
  `};
`

const SHome = styled.div`
  position: fixed;
  left: 300px;
  top: 0;
  height: 100svh;
  overflow: auto;
  width: 100%;
  ${({ theme }) => theme.media.tb`
      left: 0;
  `};
`

const SFooter = styled.div`
  height: 170px;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: auto;
  background-color: #121212;
`
