import styled from "styled-components";
import TopButton from '../corporate/TopButton';

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
        <TopButton></TopButton>
      </div>
    </StyledFooter>
  )
}
export default Footer;

const StyledFooter = styled.footer`
  .Footer {
    width: calc(100% - 300px);
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
        margin-bottom: 1rem;

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

    ${({ theme }) => theme.media.spAndTab` 
    width: 100%;

      .List {
        flex-wrap: wrap; 
        }
      }
    `}
  }
`
