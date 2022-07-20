import React, { createRef, useEffect } from "react";
import ContainerStyled from "./styles/Container.styled";
import Pilar from "./Pilar";
import ChartStyled from "./styles/ChartStyled";
import { useRef } from "react";
import gsap from "gsap";
import Footer from "./Footer";

function Chart() {
  useEffect(function () {
    gsap.to(".pillar", {
      stagger: 0.1,
      height: function (e) {
        return (350 * chart[e].amount) / 100 + "px";
      },
    });
  }, []);
  return (
    <ContainerStyled>
      <ChartStyled>
        <h2>Spending - Last 7 days</h2>
        <div className="chart">
          {chart.map(({ day, amount }, index) => {
            return (
              <Pilar id={index} key={index} day={day} amount={amount}></Pilar>
            );
          })}
        </div>
        <div className="line"></div>
        <Footer />
      </ChartStyled>
    </ContainerStyled>
  );
}

export default Chart;

let chart = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
