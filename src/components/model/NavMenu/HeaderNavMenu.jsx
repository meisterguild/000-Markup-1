import { NavMenu } from 'components/model/NavMenu'
import styled from 'styled-components'

export const HeaderNavMenu = ({ className }) => {
  return (
    <StyledHeaderNavMenu className={`${className ?? ''}`}>
      <NavMenu />
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
    </StyledHeaderNavMenu>
  )
}

const StyledHeaderNavMenu = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: -100%;
  width: 300px;
  padding: 25px;
  background-color: ${({ theme }) => theme.COLORS.WHITE100};
  display: flex;
  flex-direction: column;
  gap: 76px;
  transition: left 0.3s ease-in-out;
  overflow-y: auto;
  &.open {
    left: 0;
  }
  ${({ theme }) => theme.media.pc`
    position: static;
    width: 100%;
    padding: 0;
    background: none;
  `}
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
