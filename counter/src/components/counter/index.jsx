import React, { useState } from "react";

import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [parity, setParity] = useState("Введено четное число");

  const onClickMinus = (count) => {
    if (count > 0) {
      setCount(count - 1);
      checkParity(count - 1);
    }
  };

  const checkParity = (count) => {
    count % 2 === 0
      ? setParity("Введено четное число")
      : setParity("Введено нечетное число");
    console.log(count);
  };

  return (
    <div>
      <div className='Screen'>
        <p>{count}</p>
      </div>
      <div className='Parity'>
        <p>{parity}</p>
      </div>
      <div className='Buttons'>
        <button onClick={() => onClickMinus(count)}>-</button>
        <button
          onClick={() => {
            setCount(0);
            checkParity(0);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
            checkParity(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
