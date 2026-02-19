import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Lazy load pages - Code splitting happens here
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const About = lazy(() => import('./pages/About'));

// Loading component
const Loading = () => (
  <div className="loading">
    <div className="loader"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>App</h1>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>

        <div className="content">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
