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
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    background-color: green;
    main {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
  ${({ theme }) => theme.media.pc`
    display: flex;
    justify-content: space-between;
    .container {
      width: calc(100% - 300px);
      margin-left: 300px;
    }
  `}
`
