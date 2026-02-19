import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(GlobalContext);

  return (
    <div className="card">
      <h2>Theme Settings</h2>
      
      <div className="state-display">
        <p>Theme: <strong>{theme}</strong></p>
      </div>

      <button className="btn-primary" onClick={toggleTheme} style={{ width: '100%' }}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
