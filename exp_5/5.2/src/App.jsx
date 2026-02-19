import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import {lazy, Suspense} from 'react';

// Lazy load pages - Code splitting happens here
// Add a small artificial delay so the loading state is visible during demo
const lazyWithDelay = (factory, ms = 1000) =>
  lazy(() => new Promise((res) => setTimeout(res, ms)).then(() => factory()));

const Home = lazyWithDelay(() => import('./pages/Home'), 1000);
const Contact = lazyWithDelay(() => import('./pages/Contact'), 1000);
const Services = lazyWithDelay(() => import('./pages/Services'), 1000);
const About = lazyWithDelay(() => import('./pages/About'), 1000);

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
          <Link to="/services" className="nav-link">Service</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>

        <div className="content">
          <Suspense fallback={<div>Loading......</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
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
