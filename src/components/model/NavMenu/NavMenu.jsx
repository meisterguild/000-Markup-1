import { NAV_MENU } from './data'
import styled from 'styled-components'

export const NavMenu = ({ className }) => {
  return (
    <StyledNavMenu className={`${className ?? ''}`}>
      {NAV_MENU.map((nav, index) => {
        return (
          <li key={index}>
            <a href={nav.href}>{nav.value}</a>
          </li>
        )
      })}
    </StyledNavMenu>
  )
}

const StyledNavMenu = styled.ul``
