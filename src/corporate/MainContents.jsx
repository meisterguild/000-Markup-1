import styled from "styled-components";
import ConstructionCase from '../section/ConstructionCase';
import Flow from '../section/Flow';
import Contact from '../section/Contact';
import Footer from '../corporate/Footer';

export const MainContents = () => {
  return (
    <StyledMainContents>
      <div className='MainContent'>
        <video className='video' autoplay src="./assets/video/video.mp4"></video>
        <div className='main'>
          <ConstructionCase></ConstructionCase>
          <Flow></Flow>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </StyledMainContents>
  )
}
export default MainContents;

const StyledMainContents = styled.div`
  .MainContent {
    width: 100%;
    padding: 0 2rem;
    text-align: center;
    font-size: 2.8rem;

    .video {
      max-width: 100%;
    }

    .main {
      margin: 0 auto;
    }
  }
`
