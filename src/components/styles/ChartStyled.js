import styled from "styled-components";
let ChartStyled = styled.div`
  background-color: ${({ theme, chart }) => theme.bgColors.expenses};
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 16px;
  h2 {
    margin: 0;
  }
  .line {
    width: 100%;
    height: 1px;
    margin: 1rem 0rem;
    opacity: 0.2;
    background-color: black;
  }
  .chart {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 40vh;
    min-height: 200px;
    max-height: 300px;
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      margin-top: 1rem;
      position: relative;
      & > button {
        padding: 0.3rem;
        border-radius: 3px;
        outline: none;
        border: 0px;
        background-color: black;
        color: white;
        position: absolute;
        top: -15px;
        transition: all 0.3s;
      }
      & > .pillar {
        width: 5vw;
        max-width: 40px;
        min-width: 35px;
        border-radius: 4px;
        height: 0px;
        background-color: ${({ theme }) => theme.bgColors.balance};
        &:hover {
          cursour: pointer;
          opacity: 0.8;
          transition: all 0.3s;
        }
      }
      & > .day {
        font-size: 0.8rem;
        margin: 0.2rem;
        opacity: 0.7;
      }
    }
  }
`;
export default ChartStyled;
