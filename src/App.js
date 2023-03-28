import "./styles.css";
import { useState } from "react";

export default function App() {
  let [value, setValue] = useState(0);

  function decrementValue(event) {
    event.preventDefault();
    if (value > 0) {
      setValue(value - 1);
    }
  }
  function incrementValue(event) {
    event.preventDefault();
    if (value < 10) {
      setValue(value + 1);
    }
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="Counter">
        <button
          className="CounterMinus"
          disabled={value === 0}
          onClick={decrementValue}
        >
          _
        </button>
        <p>{value}</p>
        <button
          className="CounterPlus"
          disabled={value === 10}
          onClick={incrementValue}
        >
          +
        </button>
      </div>
    </div>
  );
}
