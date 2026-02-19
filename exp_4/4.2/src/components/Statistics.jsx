import { useSelector } from 'react-redux';

function Statistics() {
  const counter = useSelector((state) => state.counter.value);
  const multiplier = useSelector((state) => state.counter.multiplier);
  const totalOperations = useSelector((state) => state.counter.totalOperations);
  const operationsCount = useSelector((state) => state.counter.operations.length);

  return (
    <div className="card">
      <h2>Statistics</h2>
      
      <div className="stats-grid">
        <div className="stat-item">
          <label>Current Value</label>
          <div className="stat-value">{counter}</div>
        </div>
        <div className="stat-item">
          <label>Multiplier</label>
          <div className="stat-value">{multiplier}x</div>
        </div>
        <div className="stat-item">
          <label>Total Operations</label>
          <div className="stat-value">{totalOperations}</div>
        </div>
        <div className="stat-item">
          <label>Recent Actions</label>
          <div className="stat-value">{operationsCount}</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
