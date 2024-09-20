import React from "react";

const CounterTwo = (props) => {
  const { count, increment, decrement } = props;
  return (
    <div>
      <h1>{count}</h1>
      <h2>CounterTwo</h2>
      {increment && <button onClick={increment}>Increment</button>}
      {decrement && <button onClick={decrement}>Decrement</button>}
    </div>
  );
};

export default CounterTwo;
