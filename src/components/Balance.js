import React from "react";
import ContainerStyled from "./styles/Container.styled";
import BalanceStyled from "./styles/Balance.styled";

function Balance() {
  return (
    <ContainerStyled>
      <BalanceStyled>
        <div>
          <p>My Balance</p>
          <h2>$921.48</h2>
        </div>
        <div>
          <img src={"./images/logo.svg"} alt="" />
        </div>
      </BalanceStyled>
    </ContainerStyled>
  );
}

export default Balance;
