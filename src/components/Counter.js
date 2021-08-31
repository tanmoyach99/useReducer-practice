import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4> count-{count}</h4>
      <button onClick={() => dispatch("INCREMENT")}>increment </button>

      <button onClick={() => dispatch("DECREMENT")}>decrement</button>
    </div>
  );
};

export default Counter;
