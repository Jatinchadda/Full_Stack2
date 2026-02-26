import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'User'
  });
  const [counter, setCounter] = useState(0);
  const [notifications, setNotifications] = useState([]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // keep the <body> element in sync with the selected theme so that
  // global styles can target `body.light` / `body.dark` if needed.
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const updateUser = (userData) => {
    setUser(userData);
    addNotification(`User updated: ${userData.name}`);
  };

  const incrementCounter = () => {
    setCounter(prev => prev + 1);
    addNotification('Counter incremented');
  };

  const decrementCounter = () => {
    setCounter(prev => prev - 1);
    addNotification('Counter decremented');
  };

  const resetCounter = () => {
    setCounter(0);
    addNotification('Counter reset');
  };

  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
      timestamp: new Date().toLocaleTimeString()
    };
    setNotifications(prev => [newNotification, ...prev].slice(0, 5));
  };

  const value = {
    theme,
    toggleTheme,
    user,
    updateUser,
    counter,
    incrementCounter,
    decrementCounter,
    resetCounter,
    notifications,
    addNotification
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
