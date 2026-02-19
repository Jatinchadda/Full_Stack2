import React from 'react';

function Home() {
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
      <h3>Key Features:</h3>
      <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
        <li>Code Splitting - Each page is a separate chunk</li>
        <li>Lazy Loading - Pages load on demand</li>
        <li>Suspense - Loading state while components are fetched</li>
        <li>React Router - Client-side navigation</li>
      </ul>
      <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#999' }}>
        Try navigating to other pages to see lazy loading in action!
      </p>
    </div>
  );
}

export default Home;
