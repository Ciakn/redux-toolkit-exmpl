import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/CounterSlice";

const CounterComponent = () => {
  const [inputValue, setInputValue] = useState("   ");
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <h1>Counter :{counter.value}</h1>
      <button onClick={() => dispatch(increment(Number(inputValue | 1)))}>
        Increment +
      </button>
      <button onClick={() => dispatch(decrement(Number(inputValue | 1)))}>
        Decrement -
      </button>
    </>
  );
};

export default CounterComponent;
