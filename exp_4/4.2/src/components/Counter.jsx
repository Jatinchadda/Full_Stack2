import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const multiplier = useSelector((state) => state.counter.multiplier);

  return (
    <div className="card">
      <h2>Counter</h2>
      
      <div className="counter-display">
        <p>Count: <strong>{count}</strong></p>
        <p>Multiplier: <strong>{multiplier}x</strong></p>
      </div>

      <div className="button-group">
        <button className="btn-secondary" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button className="btn-danger" onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button className="btn-primary" onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
