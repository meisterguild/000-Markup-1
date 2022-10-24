import styled from "styled-components";
import SideMenu from './SideMenu';
import MainContents from './MainContents';
import 'styles/reset.css';
import GlobalStyle from 'styles/global/GlobalStyle';

export const Home = () => {
  return (
    <StyledHome>
      <body className='home'>
        <GlobalStyle></GlobalStyle>
        <SideMenu></SideMenu>
        <MainContents></MainContents>
      </body>
    </StyledHome>
  )
}
export default Home;

const StyledHome = styled.div`
  .home {
    margin-top: 4rem;
  }

  ${({ theme }) => theme.media.pcAndTab`
  .home {
    display: flex;
    justify-content: center;  
  `}
`
