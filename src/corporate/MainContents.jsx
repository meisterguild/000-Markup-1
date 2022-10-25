import styled from "styled-components";
import ConstructionCase from '../section/ConstructionCase';
import Flow from '../section/Flow';
import Contact from '../section/Contact';
import Footer from '../corporate/Footer';

export const MainContents = () => {
  return (
    <StyledMainContents>
      <div className='MainContent'>
        <div className="VideoBox">
          <video src="./assets/video/video.mp4" className='Video' type="video/mp4" loop autoPlay muted />
        </div>
        <div className='Main'>
          <ConstructionCase></ConstructionCase>
          <Flow></Flow>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </StyledMainContents >
  )
}
export default MainContents;

const StyledMainContents = styled.div`
  .MainContent {
    font-size: 2.8rem;

    .VideoBox {
      width: 100%;
      height: 100vh;

      .Video {
        position: fixed;
        top: -20rem;
        z-index: -5;
      }
    }

    .Main {
      text-align: center;
      width: 100%;
    }
  }
`
