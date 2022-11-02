import Logo from '../img/logo.svg'
import styled from 'styled-components'

export const SideMenu = () => {
  return (
    <SDiv>
      <Wrapper>
        <SImg src={Logo} alt='ロゴ' />
        <SUl class='c-sidebar__siteLinkList'>
          <li class='c-sidebar__siteLink'>
            <a href='./###'>私たちについて</a>
          </li>
          <li class='c-sidebar__siteLink'>
            <a href='./###'>サービス</a>
          </li>
          <li class='c-sidebar__siteLink'>
            <a href='./###'>商品情報</a>
          </li>
          <li class='c-sidebar__siteLink'>
            <a href='./###'>展示会</a>
          </li>
          <li class='c-sidebar__siteLink'>
            <a href='./###'>暮らしの日記</a>
          </li>
          <li class='c-sidebar__siteLink'>
            <a href='./###'>会社概要</a>
          </li>
        </SUl>
        <SUl class='c-sidebar__snsLinkList'>
          <li class='c-sidebar__snsLink'>
            <a href='./###'>Twitter</a>
          </li>
          <li class='c-sidebar__snsLink'>
            <a href='./###'>facebook</a>
          </li>
          <li class='c-sidebar__snsLink'>
            <a href='./###'>instagram</a>
          </li>
        </SUl>
      </Wrapper>
    </SDiv>
  )
}

const SDiv = styled.div`
  background-color: #fff;
  width: 300px;
  height: 100vh;
`

const Wrapper = styled.div`
  margin-left: 45px;
  width: 200px;
`
const SUl = styled.ul`
  &:not(:last-child) {
    margin-top: 40px;
    margin-bottom: 60px;
  }
  .c-sidebar__siteLink {
    margin-bottom: 16px;
    font-size: 14px;
  }
  .c-sidebar__snsLink {
    margin-bottom: 16px;
    font-size: 14px;
  }
`
const SImg = styled.img`
  width: 200px;
  height: 60px;
  margin-top: 40px;
`
