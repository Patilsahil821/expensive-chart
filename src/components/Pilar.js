import { createRef, useEffect, useRef, useState } from "react";
import React from "react";
import { gsap } from "gsap";

function Pilar({ amount, day, id, pillar, pillars }) {
  let [state, setState] = useState(false);

  return (
    <div>
      {state == true && <button>${amount}</button>}
      <div
        className="pillar"
        ref={pillar}
        onMouseEnter={function () {
          setState(true);
        }}
        onMouseOut={function () {
          setState(false);
        }}
      ></div>
      <div className="day">{day}</div>
    </div>
  );
}

export default Pilar;
