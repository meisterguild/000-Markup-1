import styled from "styled-components";
import SideMenu from './SideMenu';
import MainContents from './MainContents';
import 'styles/reset.css';
import GlobalStyle from 'styles/global/GlobalStyle';

export const Home = () => {
  return (
    <StyledHome>
      <div id="Home" className='Home'>
        <GlobalStyle></GlobalStyle>
        <SideMenu></SideMenu>
        <MainContents></MainContents>
      </div>
    </StyledHome>
  )
}
export default Home;

const StyledHome = styled.div`
  .Home {
    width: 100%;
  }

  ${({ theme }) => theme.media.pcOnly` 
    .Home {
      margin-left: 300px;
  }
  `}
`
