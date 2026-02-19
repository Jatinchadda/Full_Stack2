import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Counter() {
  const { counter, incrementCounter, decrementCounter, resetCounter } = useContext(GlobalContext);

  return (
    <div className="card">
      <h2>Counter</h2>
      
      <div className="state-display">
        <p>Count: <strong>{counter}</strong></p>
      </div>

      <div className="button-group">
        <button className="btn-secondary" onClick={decrementCounter}>
          Decrement
        </button>
        <button className="btn-danger" onClick={resetCounter}>
          Reset
        </button>
        <button className="btn-primary" onClick={incrementCounter}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
