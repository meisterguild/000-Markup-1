import logo from 'assets/images/logo.svg'
import { Hamburger, NavMenu } from 'components/ui'

import { useMedia } from 'hooks'

import styled from 'styled-components'

export const Header = ({ className }) => {
  const { isPc } = useMedia()
  return (
    <StyledHeader className={`${className ?? ''}`}>
      <h1 className='title'>
        <img src={logo} alt='明るいHOUSE' className='logo' />
      </h1>
      {!isPc && <Hamburger />}
      {isPc && <NavMenu />}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 8px 18px;
  background-color: ${({ theme }) => theme.COLORS.WHITE100};
  z-index: ${({ theme }) => theme.Z_INDEX.HEADER};
  .title {
    width: 180px;
    height: 54px;
    > .logo {
      width: 100%;
      height: 100%;
    }
  }
  ${({ theme }) => theme.media.pc`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    padding: 40px 45px;
    gap: 38px;
  `}
`
