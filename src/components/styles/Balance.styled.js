import styled from "styled-components";

let BalanceStyled = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bgColors.balance};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2,
  p {
    margin: 0;
    color: #fff;
    margin: 0.3rem;
  }
  padding: 1rem;
  border-radius: 16px;
`;
export default BalanceStyled;
