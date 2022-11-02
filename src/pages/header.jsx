import styled from 'styled-components'
import Logo from '../img/logo.svg'
import HamburgerIcon from '../img/hamburgerIcon.svg'
import { SideMenu } from 'pages/sideMenu'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SHeader>
        <SLogo src={Logo} alt='ロゴ' />
        <SButton onClick={() => setOpen((open) => !open)}>
          <SHamburgerIcon src={HamburgerIcon} alt='ロゴ' />
        </SButton>
        <SSideMenu>
          <div className={` ${open ? 'isOpen' : 'isClose'}`}>
            <SideMenu />
          </div>
        </SSideMenu>
      </SHeader>
    </>
  )
}

const SHeader = styled.header`
  height: 72px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`
const SLogo = styled.img`
  width: 180px;
  height: 54px;
  margin-top: 10px;
  margin-left: 18px;
`

const SButton = styled.button`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

const SHamburgerIcon = styled.img`
  width: 30px;
  height: 20px;

  margin-right: 18px;
`

const SSideMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;

  .isClose {
    display: none;
  }
  .isOpen {
    display: block;
  }
`
