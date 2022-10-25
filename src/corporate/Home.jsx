import styled from "styled-components";
import SideMenu from './SideMenu';
import MainContents from './MainContents';
import 'styles/reset.css';
import GlobalStyle from 'styles/global/GlobalStyle';

export const Home = () => {
  return (
    <StyledHome>
      <body id="Home" className='Home'>
        <GlobalStyle></GlobalStyle>
        <SideMenu></SideMenu>
        <MainContents></MainContents>
      </body>
    </StyledHome>
  )
}
export default Home;

const StyledHome = styled.div`
  .Home {
    margin-top: 4rem;
  }

  ${({ theme }) => theme.media.pcAndTab`
  .Home {
    display: flex;
    justify-content: center;  
  `}
`
