import { useState, useEffect } from 'react'
import styled from 'styled-components'

const PAGE_Y_OFFSET = 700

export const ScrollTop = ({ className }) => {
  const [isShow, setIsShow] = useState(false)

  const changeIsShow = () => {
    if (window.pageYOffset > PAGE_Y_OFFSET) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }
  }

  const onScrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', changeIsShow)
    return () => window.removeEventListener('scroll', changeIsShow)
  }, [])

  if (isShow) {
    return <StyledScrollTop onClick={onScrollTop} className={`${className ?? ''}`}></StyledScrollTop>
  }
  return null
}

const StyledScrollTop = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.BLACK90};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE100};
  border-radius: 50%;
  z-index: ${({ theme }) => theme.Z_INDEX.SCROLL_TOP};
  cursor: pointer;
  &::before {
    content: '';
    position: relative;
    left: 17px;
    bottom: 15px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid ${({ theme }) => theme.COLORS.WHITE100};
  }
`
