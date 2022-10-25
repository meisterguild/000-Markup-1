import styled from "styled-components";

export const Contact = () => {
  return (
    <StyledContact>
      <div className="ContactBox">
        <div className="Contact">
          <h1>お問い合わせ</h1>
          <div className="Description">お問い合わせは下記からお願いいたします。</div>
          <div className="TypeList">
            <button>
              <img src="./assets/img/icon-document.png" alt="資料請求" />
              <p>資料請求</p>
            </button>
            <button>
              <img src="./assets/img/icon-seminar.png" alt="Web説明会" />
              <p>Web説明会</p>
            </button>
            <button>
              <img src="./assets/img/icon-talk.png" alt="個別相談" />
              <p>個別相談</p>
            </button>
          </div>
        </div>
      </div>
    </StyledContact>
  )
}
export default Contact;

const StyledContact = styled.section`
  .ContactBox {
    width: 100%;
    background-color: WHITE;
    background-size: 100% 100%;

    .Contact {
      max-width: 900px;
      margin: 0 auto;
      padding-bottom: 16rem;
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

      .TypeList {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        margin-top: 6rem;
        text-align: center;

        button {
          position: relative;
          box-sizing: border-box;
          min-width: 258px;
          border: 1px solid BLACK;
          padding: 5rem 9.2rem;

          &:not(:last-child) {
            margin-right: 4.3rem;
          }

          &:hover {
            cursor: pointer;
            outline:3px solid BLACK;
          }

          &:before {
            position: absolute;
            right: 0.4rem;
            bottom: 0.4rem;
            content: '';
            width: 0;
            height: 0;
            border-left: 2rem solid transparent;
            border-bottom: 2rem solid #121212;
          }

          p {
            font-size: 1.4rem;
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
`
