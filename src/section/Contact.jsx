import styled from "styled-components";

export const Contact = () => {
  return (
    <StyledContact>
      <div className="Contact">
        <h1>お問い合わせ</h1>
        <div className="Description">お問い合わせは下記からお願いいたします。</div>
      </div>
    </StyledContact>
  )
}
export default Contact;

const StyledContact = styled.section`
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
  }
`