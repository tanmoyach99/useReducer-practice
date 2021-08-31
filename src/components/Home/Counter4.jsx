import React, { useContext } from "react";
import { CounterContext } from "../../App";

const Counter4 = () => {
  const countContext = useContext(CounterContext);
  return (
    <div>
      <h1> counter with context</h1>

      <button
        onClick={() =>
          countContext.countDispatch({
            type: "INCREMENT",
            value: 105,
          })
        }
      >
        increment by 5
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({
            type: "DECREMENT",
            value: 52,
          })
        }
      >
        decrement by 5
      </button>
    </div>
  );
};

export default Counter4;
