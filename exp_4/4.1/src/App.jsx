import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import './App.css';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import ThemeToggle from './components/ThemeToggle';
import NotificationCenter from './components/NotificationCenter';

function AppContent() {
  return (
    <div className="app-container">
      <div className="header">
        <h1>Experiment 4.1 - React Context API</h1>
        <p>Global State Management Demo</p>
      </div>

      <div className="content-wrapper">
        <Counter />
        <UserProfile />
      </div>

      <div className="content-wrapper">
        <ThemeToggle />
        <NotificationCenter />
      </div>
    </div>
  );
}

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}

export default App;

