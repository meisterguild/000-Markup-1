import styled from 'styled-components'

export const Hamburger = ({ className, onClick }) => {
  return (
    <StyledHamburger onClick={onClick} className={`${className ?? ''}`}>
      <span className='line' />
      <span className='line' />
      <span className='line' />
    </StyledHamburger>
  )
}

const StyledHamburger = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  .line {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.BLACK90};
    position: absolute;
    left: 0;
    transition: 0.5s;
    z-index: ${({ theme }) => theme.Z_INDEX.HAMBURGER};
    &:nth-child(1) {
      top: 4px;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      transition: 0.3s;
    }
    &:nth-child(3) {
      bottom: 4px;
    }
  }
  &.open .line {
    background-color: ${({ theme }) => theme.COLORS.WHITE100};
    &:nth-child(1) {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
    }
  }
`
