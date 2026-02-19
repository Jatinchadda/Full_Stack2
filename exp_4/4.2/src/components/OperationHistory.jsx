import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../redux/counterSlice';

function OperationHistory() {
  const dispatch = useDispatch();
  const operations = useSelector((state) => state.counter.operations);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div className="card">
      <h2>History ({operations.length})</h2>

      {operations.length === 0 ? (
        <p>No operations yet</p>
      ) : (
        <>
          <div className="history-list">
            {operations.map((op, index) => (
              <div key={index} className="history-item">
                <div>
                  <strong>{op.action}</strong>
                  {op.change !== 0 && (
                    <span style={{ color: op.change > 0 ? '#4CAF50' : '#f44336', marginLeft: '5px' }}>
                      ({op.change > 0 ? '+' : ''}{op.change})
                    </span>
                  )}
                  {' '} = {op.resultingValue}
                </div>
                <div className="history-timestamp">{op.timestamp}</div>
              </div>
            ))}
          </div>
          <button 
            className="btn-danger" 
            onClick={handleClearHistory}
            style={{ width: '100%', marginTop: '15px' }}
          >
            Clear
          </button>
        </>
      )}
    </div>
  );
}

export default OperationHistory;
