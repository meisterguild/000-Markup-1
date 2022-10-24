import styled from "styled-components";

export const Flow = () => {
  return (
    <StyledFlow>
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
          <div className="Text">
            <div>
              <div>1</div>
              <div>ヒアリング</div>
            </div>
            <div>テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト</div>
          </div>
        </div>
      </div>
    </StyledFlow>
  )
}
export default Flow;

const StyledFlow = styled.section`
  .Flow {
    padding: 12rem 0 14.6rem;
    text-align: left;
    font-size: 1.6rem;

    h1 {
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
      align-items: center;
      justify-content: center;
      margin-top: 6rem;

      .Chart {
        width: 200px;
        text-align: center;
      }

      .Text {
        Width; 600px;
      }
    }
  }
`