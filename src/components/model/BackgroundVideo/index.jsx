import video from 'assets/video/video.mp4'
import styled from 'styled-components'

export const BackgroundVideo = ({ className }) => {
  return (
    <StyledBackgroundVideo className={`${className ?? ''}`}>
      <video loop autoPlay muted>
        <source src={video} type='video/mp4' />
      </video>
    </StyledBackgroundVideo>
  )
}

const StyledBackgroundVideo = styled.div`
  width: 100%;
  height: 80vh;
  ${({ theme }) => theme.media.pc`
      height: 100vh;
      `}
  > video {
    position: fixed;
    top: 70px; // ヘッダーの高さ
    left: 0;
    z-index: ${({ theme }) => theme.Z_INDEX.BACKGROUND};
    ${({ theme }) => theme.media.pc`
      top: -200px;
      left: 300px;
    `}
  }
`
