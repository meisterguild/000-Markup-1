import styled from 'styled-components'
import Logo from '../img/logo.svg'

export const Header = () => {
  return (
    <>
      <SHeader>
        <SImg src={Logo} alt='ロゴ' />
      </SHeader>
    </>
  )
}

const SHeader = styled.header`
  height: 72px;
  width: 100%;
  background-color: #fff;
`
const SImg = styled.img`
  width: 180px;
  height: 54px;
  margin-top: 10px;
  margin-left: 18px;
`
