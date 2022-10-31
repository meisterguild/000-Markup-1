import styled from "styled-components";

export const Flow = () => {
  return (
    <StyledFlow>
      <div className="FlowBox">
        <div className="Flow">
          <h1>家ができるまでの流れ</h1>
          <div className="Description">お問い合わせいただいてから、家が完成するまでの流れです。</div>
          <div className="Flowchart">
            <div className="Chart">
              <div>1.ヒアリング</div>
              <div>2.プラン提案</div>
              <div>3.契約</div>
              <div>4.着工</div>
              <div>5.完成</div>
            </div>
            <div className="SequentialOrderGroup">
              <div className="SequentialOrder">
                <div className="Number">1</div>
                <div className="TextGroup">
                  <div className="Title">ヒアリング</div>
                  <div className="Text">テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト</div>
                </div>
              </div>
              <div className="SequentialOrder">
                <div className="Number">2</div>
                <div className="TextGroup">
                  <div className="Title">プラン提案</div>
                  <div className="Text">テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト</div>
                </div>
              </div>
              <div className="SequentialOrder">
                <div className="Number">3</div>
                <div className="TextGroup">
                  <div className="Title">契約</div>
                  <div className="Text">テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト</div>
                </div>
              </div>
              <div className="SequentialOrder">
                <div className="Number">4</div>
                <div className="TextGroup">
                  <div className="Title">着工</div>
                  <div className="Text">テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト</div>
                </div>
              </div>
              <div className="SequentialOrder">
                <div className="Number">5</div>
                <div className="TextGroup">
                  <div className="Title">完成</div>
                  <div className="Text">テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledFlow>
  )
}
export default Flow;

const StyledFlow = styled.section`
  .FlowBox {
    width: 100%;
    background-color: WHITE;
    background-size: 100% 100%;

    .Flow {
      max-width: 900px;
      margin: 0 auto;
      padding: 12rem 0 14.6rem;
      text-align: left;
      font-size: 1.6rem;

      h1 {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 6rem;
        font-weight: bold;
        font-size: 2.8rem;

        &:before, &:after {
          content: "";
          border-top: 1px solid BLACK;
          width: 24rem;
        }

        &:before {
          margin-right: auto;
        }

        &:after {
          margin-left: auto;
        }
      }

      .Description {
        margin-top: 6rem;
      }

      .Flowchart {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-top: 6rem;

        .Chart {
          width: 200px;
          text-align: center;
          margin-right: 4rem;

          div {
            position: relative;
            background-color: #414141;
            color: WHITE;
            font-size: 1.4rem;
            padding: 3rem 5.8rem;

            &:not(:last-child) {
              margin-bottom: 6rem;

              &:after {
                content: "";
                position: absolute;
                top: 100%;
                left: 38%;
                background-color: YELLOW;
                width: 50px;
                height: 80%;
              }
            }

            &:before {
              position: absolute;
              bottom: -3rem;
              right: 0;
              left: 0;
              width: 0;
              height: 0;
              border-left: 10rem solid transparent;
              border-right: 10rem solid transparent;
              border-top: 3rem solid #414141;
              content: '';
              z-index: 5;
            }
          }
        }

        .SequentialOrderGroup {
          max-Width: 610px;

          .SequentialOrder {
            display: flex;
            align-items: flex-start;

            &:not(:last-child) {
              margin-bottom: 4.4rem;
            }
    

            .Number {
              padding: 0.6rem 1.2rem;
              background-color: #414141;
              border-radius: 50%;
              color: WHITE;
              text-align: center;
              width: 35px;
              height: 35px;
            }

            .TextGroup {
              margin-left: 1rem;

              .Title {
                font-size: 2rem;
                padding-bottom: 0.8rem;
                border-bottom: 1px solid BLACK;
              }
              .Text {
                margin-top: 1rem;
              }
            }
          }
        }
      }
    }

  ${({ theme }) => theme.media.spAndTab` 
    .Flow {
      padding-right: 2rem;
      padding-left: 2rem;

      h1 {
        font-size: 2rem;
        
        &:before, &:after {
          width: 6rem;
        }
      }
      .Flowchart {
        flex-direction: column;
        justify-content: center;

        .Chart {
          width: 295px;
          margin: 0 auto 5rem;

          div {
            &:before {
              border-left: 14.7rem solid transparent;
              border-right: 14.7rem solid transparent;
              border-top: 3rem solid #414141;
            }
          }
        }
      }
    }
  `}
  }
`
