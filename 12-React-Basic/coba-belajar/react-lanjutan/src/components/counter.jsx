import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [double, setDouble] = useState(1);

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>

      <p>Double: {double}</p>
      <button onClick={() => setDouble(double * 2)}>+</button>
    </>
  );
}
