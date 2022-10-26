import { useState } from 'react'
import { NavMenu } from 'components/ui'
import styled from 'styled-components'

export const Hamburger = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)
  return (
    <StyledHamburger className={`${className ?? ''}`} isOpen={isOpen}>
      <div className='hamburger' onClick={toggleIsOpen}>
        <span className='line' />
        <span className='line' />
        <span className='line' />
      </div>
      {isOpen && <div onClick={toggleIsOpen} className='overlay'></div>}

      <NavMenu className='nav-wrap' />
    </StyledHamburger>
  )
}

const StyledHamburger = styled.div`
  .hamburger {
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    .line {
      display: block;
      width: 100%;
      height: 2px;
      border-radius: 4px;
      background-color: ${({ isOpen, theme }) => (isOpen ? theme.COLORS.WHITE100 : theme.COLORS.BLACK90)};
      position: absolute;
      left: 0;
      transition: 0.5s;
      z-index: ${({ theme }) => theme.Z_INDEX.HAMBURGER};
      &:nth-child(1) {
        top: 4px;
      }
      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
        transition: 0.3s;
      }
      &:nth-child(3) {
        bottom: 4px;
      }
      ${({ isOpen }) =>
        isOpen &&
        `
        &:nth-child(1) {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg);
        }
      `}
    }
  }
  .nav-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    height: 100dvh;
    padding: 25px;
    background-color: ${({ theme }) => theme.COLORS.WHITE100};
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: ${({ theme }) => theme.Z_INDEX.NAV_MENU};
    ${({ isOpen }) => isOpen && 'transform: translateX(0);'}
  }
  .overlay {
    position: absolute;
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
