import styled from 'styled-components'

export const Title = ({ className, value }) => {
  return <StyledTitle className={`${className ?? ''}`}>{value}</StyledTitle>
}

const StyledTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.FONT_SIZE.L};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE100};
  text-shadow: 0px 0px 2px ${({ theme }) => theme.COLORS.WHITE60};
  ${({ theme }) => theme.media.pc`
    margin-bottom: 60px;
    font-size: ${theme.FONT_SIZE.XXL};
  `}
  &::before,
  &::after {
    content: '';
    width: 16%;
    height: 1px;
    background-color: ${({ theme }) => theme.COLORS.WHITE100};
    ${({ theme }) => theme.media.pc`
      width: 26%;
    `}
  }
`
