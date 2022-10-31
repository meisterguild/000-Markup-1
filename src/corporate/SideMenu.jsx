import styled from "styled-components";
import React, { useState } from 'react'

export const SideMenu = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleFunction = () => {
    setIsActive(!isActive)
  }
  return (
    <StyledSubMenu>
      <div id='SideMenu' className={`SideMenu ${isActive ? "active" : ""}`}>
        <h2 className='Title'>
          <img src='./assets/img/favicon.ico' alt="" />
          <p>明るい　HOUSE</p>
        </h2>
        <div className="HamburgerMenu" onClick={toggleFunction}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <ul className='ContentsList'>
            <li><a href="#Home">私たちについて</a></li>
            <li><a href="#Home">サービス</a></li>
            <li><a href="#Home">商品情報</a></li>
            <li><a href="#Home">展示会</a></li>
            <li><a href="#Home">暮らしの日記</a></li>
            <li><a href="#Home">会社概要</a></li>
          </ul>
          <ul className='SnsList'>
            <li><a href="#Home">Twitter</a></li>
            <li><a href="#Home">facebook</a></li>
            <li><a href="#Home">instagram</a></li>
          </ul>
        </nav>
        <div className="SideMenuBack"></div>
      </div>
    </StyledSubMenu>
  )
}
export default SideMenu;

const StyledSubMenu = styled.header`
  .SideMenu {
    position: fixed;
    top: 4rem;
    left: 0;
    width: 300px;
    height: 100%;
    margin: 0 5.5rem 0 4.5rem;

    .Title {
      display: flex;
      font-size: 2rem;
      align-items: center;
    }

    .ContentsList,
    .SnsList {
      font-size: 1.4rem;
      li:not(:first-child) {
        margin-top: 1.6rem;
      }
    }

    .ContentsList {
      margin-top: 3.8rem;
    }
    .SnsList {
      margin-top: 7.6rem;
    }
  }

  ${({ theme }) => theme.media.spAndTab` 
    .SideMenu {
      display: flex;
      align-items: center;
      top: 0;
      background-color: WHITE;
      width: 100%;
      height: 7.2rem;
      margin: 0;
      z-index: 1;
      
      .Title {
        width: 100%;
        height: 100%;
        margin-left: 1.8rem;
        align-items: center;
        font-size: 1.8rem;

        img {
          margin: auto 0;
        }
      }

      .HamburgerMenu {
        cursor: pointer;
        position: relative;
        top: 0;
        right: 3rem;
        width: 3rem;
        height: 3rem;
  
        span {
          display: inline-block;
          transition: all .4s;
          position: absolute;
          left: 0;
          height: 2px;
          background: BLACK;
          z-index: 3;
  
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
      }

      nav {
        width: 300px;
        height: 100%;
        padding: 2.5rem;
        background-color: WHITE;
        position: fixed;
        top: 0;
        left: -300px;
        z-index: 3;
        transform: translateX(0);
        transition: all .5s;
      }

      .SideMenuBack {
        position: fixed;
        top: 0;
        left: 0;
        content: '';
        display: block;
        width: 0;
        height: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 2;
        opacity: 0;
        transition: opacity 0.5s;
      }

      &.active {
        .HamburgerMenu {
          span {
            &:nth-of-type(1) {
              top: 0.3rem;
              left: 0;
              transform: translateY(6px) rotate(-135deg);
              width: 100%;
              background: WHITE;
            }
    
            &:nth-of-type(2) {
              opacity: 0;
            }
    
            &:nth-of-type(3) {
              top: 1.5rem;
              left: 0;
              transform: translateY(-6px) rotate(135deg);
              width: 100%;
              background: WHITE;
            }
          }
        }

        nav {
          transform: translateX(300px);
        }

        .SideMenuBack {
          width: 100%;
          height: 100%;
          opacity: 1;
        }
      }
    }
  `}
`
