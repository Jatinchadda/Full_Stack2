import './App.css';
import Counter from './components/Counter';
import Statistics from './components/Statistics';
import AdvancedControls from './components/AdvancedControls';
import OperationHistory from './components/OperationHistory';

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1>Experiment 4.2 - Redux State Management</h1>
        <p>Centralized State Management with Redux Toolkit</p>
      </div>

      <div className="content-wrapper">
        <Counter />
        <Statistics />
      </div>

      <div className="content-wrapper">
        <AdvancedControls />
        <OperationHistory />
      </div>
    </div>
  );
}

export default App;
