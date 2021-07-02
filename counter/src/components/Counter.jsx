import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Your counter is</p> <pre>{count}</pre>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

export default Counter;

// TODO: - useReducer
// TODO: - isBig
// TODO: - many counters
// TODO: - total sum of counters
