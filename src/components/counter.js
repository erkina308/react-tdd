import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <section id="counter_page">
      <div className="counter_container">
        <h1 data-testid="count">{count}</h1>
        <div className="inc_dec_btns">
          <button
            data-testid="increment"
            className="increment"
            onClick={increment}
          >
            Increment
          </button>
          <button
            data-testid="decrement"
            className="decrement"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counter;
