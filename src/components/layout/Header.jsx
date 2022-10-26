import { useState } from 'react'
import { useMedia } from 'hooks'

import logo from 'assets/images/logo.svg'
import { Hamburger } from 'components/ui'
import { HeaderNavMenu } from 'components/model/NavMenu'

import styled from 'styled-components'

export const Header = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)
  const { isPc } = useMedia()
  return (
    <StyledHeader className={`${className ?? ''}`}>
      <h1 className='title'>
        <img src={logo} alt='明るいHOUSE' className='logo' />
      </h1>
      {!isPc && <Hamburger onClick={toggleIsOpen} className={`${isOpen ? 'open' : ''}`} />}
      {isOpen && <div onClick={toggleIsOpen} className='overlay'></div>}
      <HeaderNavMenu className={`${isOpen ? 'open' : ''}`} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 18px;
  background-color: ${({ theme }) => theme.COLORS.WHITE100};
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.Z_INDEX.HEADER};
  ${({ theme }) => theme.media.pc`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 38px;
    width: 300px;
    height: 100vh;
    padding: 40px 45px;
  `}
  .title {
    width: 180px;
    height: 54px;
    > .logo {
      width: 100%;
      height: 100%;
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.BLACK100};
    animation: fadeIn 0.5s;
    opacity: 0.8;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
`
