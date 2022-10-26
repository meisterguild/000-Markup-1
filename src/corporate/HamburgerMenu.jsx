import styled from "styled-components";
import React, { useState } from 'react'

export const HamburgerMenu = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleFunction = () => {
    setIsActive(!isActive)
  }

  return (
    <StyledHamburgerMenu>
      <div className={`HamburgerMenu ${isActive ? "active" : ""}`} onClick={toggleFunction}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledHamburgerMenu>
  )
}
export default HamburgerMenu;

const StyledHamburgerMenu = styled.div`
  ${({ theme }) => theme.media.spAndTab` 
    .HamburgerMenu {
      cursor: pointer;
      position: relative;
      top: 0;
      right: 3.5rem;
      width: 30px;
      height: 30px;

      span {
        display: inline-block;
        transition: all .4s;
        position: absolute;
        left: 14px;
        height: 2px;
        background: BLACK;
        z-index: 10;

        &:nth-of-type(1) {
          top: 0;
          width: 3rem;
        }

        &:nth-of-type(2) {
          top: 1rem;
          width: 3rem;
        }

        &:nth-of-type(3) {
          top: 2rem;
          width: 3rem;
        }
      }
      &.active {
        span {
          &:nth-of-type(1) {
            top: 0.3rem;
            left: 1.5rem;
            transform: translateY(6px) rotate(-135deg);
            width: 100%;
            background: WHITE;

          }
  
          &:nth-of-type(2) {
            opacity: 0;
          }
  
          &:nth-of-type(3) {
            top: 1.5rem;
            left: 1.5rem;
            transform: translateY(-6px) rotate(135deg);
            width: 100%;
            background: WHITE;

          }
        }
      }
    }
  ` }
`
