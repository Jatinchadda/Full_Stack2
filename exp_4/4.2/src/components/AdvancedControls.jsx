import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount, decrementByAmount, setMultiplier } from '../redux/counterSlice';

function AdvancedControls() {
  const dispatch = useDispatch();
  const multiplier = useSelector((state) => state.counter.multiplier);
  const [customAmount, setCustomAmount] = useState(5);
  const [multiplierValue, setMultiplierValue] = useState(multiplier);

  const handleIncrementByAmount = () => {
    if (customAmount) {
      dispatch(incrementByAmount(parseInt(customAmount)));
    }
  };

  const handleDecrementByAmount = () => {
    if (customAmount) {
      dispatch(decrementByAmount(parseInt(customAmount)));
    }
  };

  const handleSetMultiplier = () => {
    const value = parseInt(multiplierValue);
    if (value > 0) {
      dispatch(setMultiplier(value));
    }
  };

  return (
    <div className="card">
      <h2>Advanced Controls</h2>

      <div className="control-group">
        <label>Custom Amount</label>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />
        <div className="button-group" style={{ marginTop: '10px' }}>
          <button className="btn-secondary" onClick={handleDecrementByAmount}>
            Decrease
          </button>
          <button style={{ gridColumn: '2 / 4' }} className="btn-primary" onClick={handleIncrementByAmount}>
            Increase by {customAmount}
          </button>
        </div>
      </div>

      <div className="multiplier-section">
        <h4>Multiplier: {multiplier}x</h4>
        <input
          type="number"
          value={multiplierValue}
          onChange={(e) => setMultiplierValue(e.target.value)}
          min="1"
        />
        <button 
          className="btn-primary" 
          onClick={handleSetMultiplier}
          style={{ width: '100%', marginTop: '10px' }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default AdvancedControls;
