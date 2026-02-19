import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="page">
      <h2>Home</h2>
      <p>
        Welcome to the Lazy Loading Demo application. This page demonstrates React's code splitting 
        and lazy loading capabilities using React.lazy() and Suspense.
      </p>
      <p>
        Each page in this application is loaded only when you navigate to it, reducing the initial 
        bundle size and improving performance.
      </p>
      
      <h3>Interactive Demo:</h3>
      <div style={{ 
        padding: '15px', 
        background: '#f0f0f0', 
        borderRadius: '4px',
        marginBottom: '20px'
      }}>
        <p>Click Counter: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)} style={{
          padding: '8px 16px',
          marginRight: '10px',
          cursor: 'pointer',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}>
          +1
        </button>
        <button onClick={() => setCount(0)} style={{
          padding: '8px 16px',
          cursor: 'pointer',
          background: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}>
          Reset
        </button>
      </div>

      <h3>Key Features:</h3>
      <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
        <li>Code Splitting - Each page is a separate chunk</li>
        <li>Lazy Loading - Pages load on demand</li>
        <li>Suspense - Loading state while components are fetched</li>
        <li>React Router - Client-side navigation</li>
      </ul>

      <button onClick={() => setExpanded(!expanded)} style={{
        padding: '8px 12px',
        cursor: 'pointer',
        background: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        marginTop: '15px'
      }}>
        {expanded ? 'Hide Details' : 'Show Details'}
      </button>

      {expanded && (
        <div style={{ marginTop: '15px', padding: '10px', background: '#e7f3ff', borderRadius: '4px' }}>
          <p><strong>Why Lazy Loading Matters:</strong></p>
          <ul style={{ marginLeft: '20px' }}>
            <li>Reduces initial app size by 40-60%</li>
            <li>Faster first load on slow networks</li>
            <li>Better Core Web Vitals scores</li>
            <li>Improved SEO performance</li>
          </ul>
        </div>
      )}

      <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#999' }}>
        Try navigating to other pages to see lazy loading in action!
      </p>
    </div>
  );
}

export default Home;
