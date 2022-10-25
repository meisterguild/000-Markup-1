import styled from "styled-components";

export const SideMenu = () => {
  return (
    <StyledSubMenu>
      <div className='SideMenu'>
        <h2 className='Title'>
          <img src='./assets/img/favicon.ico' alt="" />
          <p>明るい　HOUSE</p>
        </h2>
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
      </div>
    </StyledSubMenu>
  )
}
export default SideMenu;

const StyledSubMenu = styled.div`
  .SideMenu {
    width: 200px;
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
`
