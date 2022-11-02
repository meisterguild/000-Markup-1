import styled from 'styled-components'
import ImgProject1 from '../img/project1.jpg'
import ImgProject2 from '../img/project2.jpg'
import ImgProject3 from '../img/project3.jpg'
import ImgProject4 from '../img/project4.jpg'
import ImgDocument from '../img/icon-document.png'
import ImgSeminar from '../img/icon-seminar.png'
import ImgTalk from '../img/icon-talk.png'
import Video from '../img/video.mp4'

export const Home = () => {
  return (
    <>
      <SH1>明るいHOUSE</SH1>
      <SDiv>
        <SVideo src={Video} autoPlay loop muted playsInline></SVideo>
        <SBackgroundGradation>
          <SWrapper>
            <SContainer>
              <SHeadline primary>建築事例を紹介</SHeadline>
              <SGrid>
                <SThumbnail href='./###'>
                  <img src={ImgProject1} alt='Project1の画像' />
                  <SPProject>PROJECT01</SPProject>
                </SThumbnail>
                <SThumbnail href='./###'>
                  <img src={ImgProject2} alt='Project2の画像' />
                  <SPProject>PROJECT02</SPProject>
                </SThumbnail>
                <SThumbnail href='./###'>
                  <img src={ImgProject3} alt='Project3の画像' />
                  <SPProject>PROJECT03</SPProject>
                </SThumbnail>
                <SThumbnail href='./###'>
                  <img src={ImgProject4} alt='Project4の画像' />
                  <SPProject>PROJECT04</SPProject>
                </SThumbnail>
              </SGrid>
            </SContainer>
            <SContainer>
              <SHeadline primary>明るいHOUSEの特徴</SHeadline>
              <SFeatures primary>
                <SFeature>
                  <SCircle>design</SCircle>
                  <SHeadlineCircle>デザイン</SHeadlineCircle>
                  <SCycleP>テキストテキストテキスト</SCycleP>
                </SFeature>
                <SFeature>
                  <SCircle>quality</SCircle>
                  <SHeadlineCircle>性能</SHeadlineCircle>
                  <SCycleP>テキストテキストテキスト</SCycleP>
                </SFeature>
                <SFeature>
                  <SCircle>support</SCircle>
                  <SHeadlineCircle>サポート</SHeadlineCircle>
                  <SCycleP>テキストテキストテキスト</SCycleP>
                </SFeature>
              </SFeatures>
            </SContainer>
          </SWrapper>
        </SBackgroundGradation>
        <SBackgroundWhite>
          <SWrapper>
            <SContainer>
              <SHeadline>家ができるまでの流れ</SHeadline>
              <SP>お問い合わせいただいてから、家が完成するまでの流れです。</SP>
              ヒアリングテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              プラン提案テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              契約テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              着工テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              完成テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </SContainer>

            <SContainer>
              <SHeadline>お問い合わせ</SHeadline>
              <SP>お問い合わせは下記からお願いいたします。</SP>
              <SContactItems>
                <SContactItem href='./###'>
                  <img src={ImgDocument} alt='資料請求ロゴ' />
                  <p>資料請求 </p>
                  <STriangle />
                </SContactItem>
                <SContactItem href='./###'>
                  <img src={ImgSeminar} alt='web説明会ロゴ' />
                  <p>web説明会 </p>
                  <STriangle />
                </SContactItem>
                <SContactItem href='./###'>
                  <img src={ImgTalk} alt='個別相談ロゴ' />
                  <p>個別相談</p>
                  <STriangle />
                </SContactItem>
              </SContactItems>
            </SContainer>
          </SWrapper>
        </SBackgroundWhite>
      </SDiv>
    </>
  )
}

const SH1 = styled.div`
  position: absolute;
  z-index: -100;
`

const SDiv = styled.div`
  width: calc(100% - 280px);
  margin-top: 600px;
  ${({ theme }) => theme.media.tb`
  width: 100%;
  `};
`

const SBackgroundGradation = styled.div`
  background: linear-gradient(transparent, #000);
`

const SBackgroundWhite = styled.div`
  background-color: #fff;
`

const SVideo = styled.video`
  position: fixed;
  z-index: -10; /*最背面に設定*/
  top: 0;
  left: 300px;
  width: auto;
  height: 100vh;
  ${({ theme }) => theme.media.tb`
  height:100vh;
  width: auto;
  left: 0;
  `};
`

const SWrapper = styled.div`
  width: clamp(500px, 100%, 960px);
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  ${({ theme }) => theme.media.tb`
  // margin-left: 20px;
  // margin-left: 20px;
  width: calc(100% - 40px)
  `};
`

const SContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  :last-child {
    padding-bottom: 120px;
  }
  ${({ theme }) => theme.media.tb`
  padding-top: 60px;
  padding-bottom: 60px;
  `};
`

const SHeadline = styled.h2`
  color: ${(props) => (props.primary ? '#fff' : '#000')};
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  ${({ theme }) => theme.media.tb`
  font-size: 20px;
  `};

  :before,
  :after {
    content: '';
    height: 1px;
    background-color: ${(props) => (props.primary ? '#fff' : '#000')};
    flex-grow: 1;
  }
  :before {
    margin-right: 5rem;
    ${({ theme }) => theme.media.tb`
    margin-right: 2rem;
  `};
  }
  :after {
    margin-left: 5rem;
    ${({ theme }) => theme.media.tb`
    margin-left: 2rem;
  `};
  }
`
const SP = styled.p`
  margin-top: 30px;
`

const SGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 56px;
  row-gap: 50px;
  margin-top: 60px;
  ${({ theme }) => theme.media.tb`
  grid-template-columns: 1fr 
  `};
`
const SThumbnail = styled.a`
  position: relative;
  border: 1px solid #fff;
`

const SPProject = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  color: #ffffff;
  padding: 4px 8px;
  width: 100%;
  background-color: #2e2e2e;
`
const SFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5%;
  margin-top: 60px;
  color: ${(props) => (props.primary ? '#fff' : '#000')};
  width: 100%;
`
const SFeature = styled.div`
  text-align: center;
`

const SCircle = styled.div`
  border: 1px solid #fff;
  border-radius: 50%;
  width: 100px;
  height: 1 00px;
  text-align: center;
  justify-content: center;

  display: inline-block;
  line-height: 100px;

  ${({ theme }) => theme.media.pc`
  width: 200px;
  height: 200px;  
  line-height: 200px;
  `};
`

const SHeadlineCircle = styled.h3`
  color: #ffffff;
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
`

const SCycleP = styled.p`
  color: #ffffff;
  margin-top: 4px;
  font-size: 14px;
`

const SContactItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5%;
  margin-top: 60px;
  width: 100%;
  ${({ theme }) => theme.media.tb`
  grid-template-columns: 1fr ;
  `};
`

const SContactItem = styled.a`
  border: solid 1px #121212;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 190px;
  font-size: 14px;
  position: relative;
  margin-bottom: 20px;
  ${({ theme }) => theme.media.tb`
  grid-template-columns: 1fr ;
  width: 200px;
  margin : 0 auto 20px auto;
  `};
`

const STriangle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  border-top: 20px solid transparent;
  border-right: 20px solid #121212;
  margin-right: 4px;
  margin-bottom: 4px;
`
