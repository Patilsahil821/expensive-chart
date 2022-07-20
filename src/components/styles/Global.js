import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.bgColors.body};
    font-family: 'Dm Sans', sans-serif;
    margin: 0;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
  }
  p,h1,h2,h3,h4,h5,h6{
    margin:0;
  }
  

`;

export default GlobalStyles;
