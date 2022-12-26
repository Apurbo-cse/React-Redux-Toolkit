import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <p>{count}</p>
        <div>
          <button noClick={() => dispatch(decrement())} className="text-dark">
            -
          </button>

          <button noClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
