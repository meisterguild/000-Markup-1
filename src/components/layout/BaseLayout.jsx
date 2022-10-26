import { BaseSideBar } from 'components/layout/BaseSideBar'
import { Header } from 'components/layout/Header'

import { useMedia } from 'hooks'

import styled from 'styled-components'

export const BaseLayout = ({ children }) => {
  const { isPc } = useMedia()
  return (
    <StyledBaseLayout>
      {!isPc && <Header />}
      <BaseSideBar Sidebar={<Header />}>
        <main>{children}</main>
      </BaseSideBar>
      {/* <Footer /> */}
    </StyledBaseLayout>
  )
}

const StyledBaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: #777;
  main {
  }
`
