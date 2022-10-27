import { FooterNavMenu } from 'components/model/NavMenu'
import styled from 'styled-components'

export const Footer = ({ className }) => {
  return (
    <StyledFooter className={`${className ?? ''}`}>
      <FooterNavMenu />
      <p className='copyright'>Copyright © 2021 Akarui HOUSE All Rights Reserved.</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.COLORS.BLACK90};
  color: ${({ theme }) => theme.COLORS.WHITE100};
  z-index: ${({ theme }) => theme.Z_INDEX.FOOTER};
  .copyright {
    font-size: ${({ theme }) => theme.FONT_SIZE.XS};
    text-align: center;
  }
`
