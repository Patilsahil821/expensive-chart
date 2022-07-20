import React from "react";
import { ThemeProvider } from "styled-components";
import Balance from "./components/Balance";
import Chart from "./components/Chart";
import Global from "./components/styles/Global";

function App() {
  let theme = {
    bgColors: {
      body: "#f7e9dc",
      balance: "#ec755d",
      expenses: "#fff",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <Balance />
        <Chart />
      </>
    </ThemeProvider>
  );
}

export default App;
