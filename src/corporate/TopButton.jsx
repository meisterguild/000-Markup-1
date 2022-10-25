import { useEffect, useState } from 'react'
import styled from "styled-components";
import { Link as Scroll } from 'react-scroll';

const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 700  //ボタンを表示させたい位置
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = {
    opacity: 0,
    transition: '0.5s',
    pointerEvents: 'none'
  }
  const activeStyle = {
    opacity: 1,
    transition: '0.5s'
  }
  const style = isButtonActive ? activeStyle : normalStyle

  return (
    <StyledTopButton>
      <button className="Top" style={style} onClick={returnTop}>
        <Scroll to="Home" smooth={true} duration={500}></Scroll>
      </button>
    </StyledTopButton>
  )
}

export default ReturnTopButton

const StyledTopButton = styled.div`
  .Top {
    position: fixed;
    right: 4rem;
    bottom: 2.5rem;
    width: 5rem;
    height: 5rem;
    box-sizing: border-box;
    border: 1px solid WHITE;
    border-radius: 50%;
    background-color: #121212;
    
    a {
      position: relative;
      display: block;
      transition: .3s;
      width: 5rem;
      height: 5rem;

      &:before {
        content: '';
        position: absolute;
        right: 37%;
        top: 40%;
        width: 0;
        height: 0;
        border-left: 0.7rem solid transparent;
        border-right: 0.7rem solid transparent;
        border-bottom: 0.7rem solid WHITE;
      }
    }
  }
`

