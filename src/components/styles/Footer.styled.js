import styled from "styled-components";

let FooterStyled = styled.footer`
  & {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    p {
      margin-bottom: 0.4rem;
      font-size: 0.8rem;
      opacity: 0.6;
    }
    & > div:last-child {
      text-align: right;
      h5 {
        font-weight: 900;
        font-size: 1rem;
        margin: 0;
      }
      p:last-child {
        font-size: 0.8rem;
      }
    }
  }
`;
export default FooterStyled;
