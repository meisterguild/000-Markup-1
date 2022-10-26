import styled from 'styled-components'

export const NavMenu = ({ className }) => {
  return (
    <StyledNavMenu className={`${className ?? ''}`}>
      <ul>
        <li>
          <a href='/'>私たちについて</a>
        </li>
        <li>
          <a href='/'>サービス</a>
        </li>
        <li>
          <a href='/'>商品情報</a>
        </li>
        <li>
          <a href='/'>展示会</a>
        </li>
        <li>
          <a href='/'>暮らしの日記</a>
        </li>
        <li>
          <a href='/'>会社概要</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href='https://twitter.com/'>Twitter</a>
        </li>
        <li>
          <a href='https://ja-jp.facebook.com/'>facebook</a>
        </li>
        <li>
          <a href='https://www.instagram.com/'>instagram</a>
        </li>
      </ul>
    </StyledNavMenu>
  )
}

const StyledNavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 76px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    li {
      font-size: ${({ theme }) => theme.FONT_SIZE.S};
      color: ${({ theme }) => theme.COLORS.BLACK90};
    }
  }
`
