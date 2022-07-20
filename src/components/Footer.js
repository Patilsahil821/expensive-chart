import React from "react";
import FooterStyled from "./styles/Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <div>
        <p>Total this month</p>
        <h1>$478.33</h1>
      </div>
      <div>
        <h5>+2.4%</h5>
        <p>From last month</p>
      </div>
    </FooterStyled>
  );
}

export default Footer;
