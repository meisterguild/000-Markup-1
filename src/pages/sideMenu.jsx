import Logo from '../img/logo.svg'
import styled from 'styled-components'

export const SideMenu = () => {
  return (
    <SDiv>
      <Wrapper>
        <SImg src={Logo} alt='ロゴ' />
        <SUl class='c-sidebar__siteLinkList'>
          <li class='c-sidebar__siteLink'>私たちについて</li>
          <li class='c-sidebar__siteLink'>サービス</li>
          <li class='c-sidebar__siteLink'>商品情報</li>
          <li class='c-sidebar__siteLink'>展示会</li>
          <li class='c-sidebar__siteLink'>暮らしの日記</li>
          <li class='c-sidebar__siteLink'>会社概要</li>
        </SUl>
        <SUl class='c-sidebar__snsLinkList'>
          <li class='c-sidebar__snsLink'>Twitter</li>
          <li class='c-sidebar__snsLink'>facebook</li>
          <li class='c-sidebar__snsLink'>instagram</li>
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
