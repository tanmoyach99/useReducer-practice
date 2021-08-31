import { createContext, useReducer } from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import Counter2 from "./components/Counter2";
// import Counter3 from "./components/Counter3";
import Home from "./components/Home/Home";

export const CounterContext = createContext();

const initialState = {
  counter: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + action.value,
      };
    case "DECREMENT":
      return {
        counter: state.counter - action.value,
      };
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>count:{count.counter} </h1>
      <CounterContext.Provider value={{ countDispatch: dispatch }}>
        <Home />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
