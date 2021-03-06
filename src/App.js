import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount((count += 1));
  };

  const decrement = () => {
    setCount((count -= 1));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>If you see this your code works like a charm</h1>
      <h2>Begin editing</h2>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
