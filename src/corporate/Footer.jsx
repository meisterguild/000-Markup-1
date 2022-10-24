import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="Footer">
        <div className="List">
          <div>私たちについて</div>
          <div>サービス</div>
          <div>商品情報</div>
          <div>展示会</div>
          <div>暮らしの日記</div>
          <div>暮らしの日記</div>
        </div>
        <div className="CopyLight">Copyright © 2021 Akarui HOUSE All Rights Reserved.</div>
      </div>
    </StyledFooter>
  )
}
export default Footer;

const StyledFooter = styled.footer`
  .Footer {
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

      div {
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
  }
`