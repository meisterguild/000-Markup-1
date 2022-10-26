import { NavMenu } from 'components/model/NavMenu'
import styled from 'styled-components'

export const FooterNavMenu = ({ className }) => {
  return (
    <StyledFooterNavMenu className={`${className ?? ''}`}>
      <NavMenu />
    </StyledFooterNavMenu>
  )
}

const StyledFooterNavMenu = styled.nav`
  margin: 30px 0 70px;
  ${({ theme }) => theme.media.pc`
    margin-bottom: 60px;
  `}
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
    font-size: ${({ theme }) => theme.FONT_SIZE.S};
    li {
      &:not(:last-child) {
        padding-right: 20px;
        border-right: solid 1px ${({ theme }) => theme.COLORS.WHITE100};
      }
    }
  }
`
