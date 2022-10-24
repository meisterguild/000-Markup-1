import styled from "styled-components";

export const ConstructionCase = () => {
  return (
    <StyledConstructionCase>
      <div className="ConstructionCase">
        <div className="ImageGroup">
          <h1>建築事例を紹介</h1>
          <img src="./assets/img/project1.jpg" alt="project1" />
          <img src="./assets/img/project2.jpg" alt="project2" />
          <img src="./assets/img/project3.jpg" alt="project3" />
          <img src="./assets/img/project4.jpg" alt="project4" />
        </div>
        <div className="Feature">
          <h1>明るいHOUSEの特徴</h1>
          <div className="CircleGroup">
            <div>
              <div className="Circle">design</div>
              <div className="Strong">デザイン</div>
              <div>テキストテキストテキスト</div>
            </div>
            <div>
              <div className="Circle">quality</div>
              <div className="Strong">性能</div>
              <div>テキストテキストテキスト</div>
            </div>
            <div>
              <div className="Circle">support</div>
              <div className="Strong">サポート</div>
              <div>テキストテキストテキスト</div>
            </div>
          </div>
        </div>
      </div>
    </StyledConstructionCase>
  )
}
export default ConstructionCase;

const StyledConstructionCase = styled.section`
  .ConstructionCase {
    padding: 8rem 0 16rem;
    background: linear-gradient(#5454544D, #505050B3, #000000CC);

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
            box-sizing: border-box;
            padding: 11.8rem 10.7rem;
            margin-bottom: 1.5rem;
            border: 1px solid WHITE;
            border-radius: 50%;
          }

          .Strong {
            font-weight: bold;
            font-size: 1.6rem;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
`