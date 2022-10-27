import { Header } from 'components/layout/Header'
import { Footer } from 'components/layout/Footer'

import styled from 'styled-components'

export const BaseLayout = ({ children }) => {
  return (
    <StyledBaseLayout>
      <Header />
      <div className='container'>
        <main>{children}</main>
        <Footer />
      </div>
    </StyledBaseLayout>
  )
}

const StyledBaseLayout = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: 100dvh;
  }
  ${({ theme }) => theme.media.pc`
    .container {
      width: calc(100% - 300px);
      margin-left: 300px;
    }
  `}
`
