import styled from "styled-components";

export const ConstructionCase = () => {
  return (
    <StyledConstructionCase>
      <div className="ConstructionCase">
        <div className="ImageGroup">
          <h1>建築事例を紹介</h1>
          <a href="#Home"><img src="./assets/img/project1.jpg" alt="project1" /></a>
          <a href="#Home"><img src="./assets/img/project2.jpg" alt="project2" /></a>
          <a href="#Home"><img src="./assets/img/project3.jpg" alt="project3" /></a>
          <a href="#Home"><img src="./assets/img/project4.jpg" alt="project4" /></a>
        </div>
        <div className="Feature">
          <h1>明るいHOUSEの特徴</h1>
          <div className="CircleGroup">
            <div>
              <div className="Circle">
                <button className="CircleSwipe">design</button></div>
              <div className="Strong">デザイン</div>
              <div>テキストテキストテキスト</div>
            </div>
            <div>
              <div className="Circle"><button className="CircleSwipe">quality</button></div>
              <div className="Strong">性能</div>
              <div>テキストテキストテキスト</div>
            </div>
            <div>
              <div className="Circle"><button className="CircleSwipe">support</button></div>
              <div className="Strong">サポート</div>
              <div>テキストテキストテキスト</div>
            </div>
          </div>
        </div>
      </div>
    </StyledConstructionCase >
  )
}
export default ConstructionCase;

const StyledConstructionCase = styled.section`
  .ConstructionCase {
    width: calc(100% - 300px);
    padding: 8rem 0 16rem;
    background: linear-gradient(#5454544D, #505050B3, #000000CC);
    background-size: 100% 100%;

    h1 {
      width: 100%;
      color: WHITE;
      display: flex;
      align-items: center;
      margin-bottom: 6rem;
      font-weight: bold;

      &:before, &:after {
        content: "";
        border-top: 1px solid WHITE;
        width: 24rem;
      }

      &:before {
        margin-right: auto;
      }

      &:after {
        margin-left: auto;
      }
    }

    .ImageGroup {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      
      img {
        width: 402px;
        border: 1px solid WHITE;
        box-shadow: inset 0 -0.3rem 0 #2E2E2E;

        :nth-of-type(n+3) {
          margin-top: 5rem;
        }
      }
    }

    .Feature {
      max-width: 900px;
      margin: 16rem auto 0;
      text-align: center;

      .CircleGroup {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          color: WHITE;
          font-size: 1.4rem;
          margin: 0 auto;

          .Circle {
            width: 100%;

            .CircleSwipe {
              position: relative;
              width: 100%;
              max-width: 258px;
              max-height: 258px;
              overflow: hidden;
              padding: 11.8rem 10.7rem;
              margin-bottom: 1.5rem;
              border: 1px solid WHITE;
              border-radius: 50%;
              background-color: transparent;

              &:before {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: -1;
                background-color: WHITE;
                box-sizing: border-box;
                content: "";
                transform: translateX(-100%);
                transition: transform 0.5s ease-in-out;
              }

              &:hover {
                cursor: pointer;
                &:before {
                  transform: translateX(0);
                }
              }
            }
          }

          .Strong {
            font-weight: bold;
            font-size: 1.6rem;
            margin-bottom: 0.5rem;
          }
        }
      }
    }

    ${({ theme }) => theme.media.spAndTab` 
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      margin-left: 0;

      h1 {
        font-size: 2rem;

        &:before, &:after {
          width: 6rem;
        }
      }
      
      .ImageGroup {        
        img {
          width: 100%;
        }
      }
      .Feature {
        .CircleGroup {
          div {
            .Circle {
              .CircleSwipe {
                padding: 4rem 2.8rem;
                max-width: 100px;
                max-height: 100px;
              }
            }
          }
        }
      }
    `}
  }
`
