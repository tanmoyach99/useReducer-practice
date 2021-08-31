import React, { useReducer } from "react";

const initialState = {
  counter: 10,
  counter2: 1,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.value };
    case "DECREMENT":
      return { ...state, counter: state.counter - action.value };
    case "INCREMENT2":
      return { ...state, counter2: state.counter2 + action.value };
    case "DECREMENT2":
      return { ...state, counter2: state.counter2 - action.value };
    default:
      return state;
  }
};

const Counter3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1> Counter no 3</h1>
      <h4> count-{count.counter}</h4>
      <h6>2nd counter: {count.counter2}</h6>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            value: 1,
          })
        }
      >
        increment{" "}
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            value: 2,
          })
        }
      >
        decrement
      </button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            value: 5,
          })
        }
      >
        increment by 5
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            value: 5,
          })
        }
      >
        decrement by 5
      </button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT2",
            value: 25,
          })
        }
      >
        increment by 25
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT2",
            value: 25,
          })
        }
      >
        decrement by 25
      </button>
    </div>
  );
};

export default Counter3;
