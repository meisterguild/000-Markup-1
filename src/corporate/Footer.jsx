import styled from "styled-components";
import { Link as Scroll } from 'react-scroll';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="Footer">
        <div className="List">
          <a href="#Home">私たちについて</a>
          <a href="#Home">サービス</a>
          <a href="#Home">商品情報</a>
          <a href="#Home">展示会</a>
          <a href="#Home">暮らしの日記</a>
          <a href="#Home">会社概要</a>
        </div>
        <div className="CopyLight">Copyright © 2021 Akarui HOUSE All Rights Reserved.</div>
        <div className="Top">
          <Scroll to="Home" smooth={true}></Scroll>
        </div>
      </div>
    </StyledFooter>
  )
}
export default Footer;

const StyledFooter = styled.footer`
  .Footer {
    position: relative;
    padding: 5rem 0 2rem;
    background-color: BLACK;
    color: WHITE;

    .List {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;

      a {
        &:not(:first-child) {
          padding-left: 2rem;
        }

        &:not(:last-child) {
          padding-right: 2rem;
          border-right: 1px solid WHITE;
        }
      }
    }

    .CopyLight {
      margin-top: 6rem;
      font-size: 1.2rem;
    }

    .Top {
      position: absolute;
      right: 2.5rem;
      bottom: 2.5rem;
      width: 5rem;
      height: 5rem;
      box-sizing: border-box;
      border: 1px solid WHITE;
      border-radius: 50%;
      
      a {
        position: relative;
        display: block;
        transition: .3s;
        width: 5rem;
        height: 5rem;

        &:before {
          content: '';
          position: absolute;
          right: 37%;
          top: 40%;
          width: 0;
          height: 0;
          border-left: 0.7rem solid transparent;
          border-right: 0.7rem solid transparent;
          border-bottom: 0.7rem solid WHITE;
        }
      }
    }
  }
`
