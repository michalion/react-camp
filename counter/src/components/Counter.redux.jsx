import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, changeIncrement } from "../redux/counterSlice";

const Counter = () => {
  const { count, incrementBy } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Your counter is</p>
      <div style={{ marginLeft: "1em" }}>
        <pre>{count}</pre>
      </div>
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <div>
        <label>
          Increment by
          <input
            type="text"
            value={incrementBy}
            onChange={({ target: { value } }) => {
              dispatch(changeIncrement(Number(value)));
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default Counter;

// TODO: - many counters
// TODO: - total sum of counters
