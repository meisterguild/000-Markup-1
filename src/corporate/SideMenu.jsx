import styled from "styled-components";

export const SideMenu = () => {
  return (
    <StyledSubMenu>
      <div className='sideMenu'>
        <h2 className='title'>
          <img src='./assets/img/favicon.ico' alt="" />
          <p>明るい　HOUSE</p>
        </h2>
        <ul className='contentsList'>
          <li>私たちについて</li>
          <li>サービス</li>
          <li>商品情報</li>
          <li>展示会</li>
          <li>暮らしの日記</li>
          <li>会社概要</li>
        </ul>
        <ul className='snsList'>
          <li>Twitter</li>
          <li>facebook</li>
          <li>instagram</li>
        </ul>
      </div>
    </StyledSubMenu>
  )
}
export default SideMenu;

const StyledSubMenu = styled.div`
  .sideMenu {
    width: 200px;
    margin: 0 5.5rem 0 4.5rem;

    .title {
      display: flex;
      font-size: 2rem;
      align-items: center;
    }

    .contentsList,
    .snsList {
      font-size: 1.4rem;
      li:not(:first-child) {
        margin-top: 1.6rem;
      }
    }

    .contentsList {
      margin-top: 3.8rem;
    }
    .snsList {
      margin-top: 7.6rem;
    }
`
