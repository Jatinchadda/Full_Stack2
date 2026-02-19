import React, { useState } from 'react';

function About() {
  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const [version, setVersion] = useState(1);

  const benefits = [
    { title: 'Faster Initial Page Load', explanation: 'Users see content immediately without downloading unused code' },
    { title: 'Reduced Bundle Size', explanation: 'Initial chunk is 40-60% smaller with lazy loading' },
    { title: 'Better Performance on Slow Networks', explanation: 'Mobile users benefit from smaller chunks' },
    { title: 'Improved User Experience', explanation: 'No blocking on page transitions' },
    { title: 'Progressive Enhancement', explanation: 'Gracefully handles network delays with loading states' }
  ];

  return (
    <div className="page">
      <h2>About This Project</h2>
      <p>
        This is Experiment 5.2 - a demonstration of lazy loading and code splitting in React applications.
        <strong> Version: {version}</strong>
      </p>

      <h3>What is Lazy Loading?</h3>
      <p>
        Lazy loading is a technique where components are only loaded when they are needed. This reduces 
        the initial bundle size and improves application performance, especially for larger applications.
      </p>

      <h3>How Does It Work?</h3>
      <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
        <li><strong>React.lazy()</strong> - Dynamically imports a component</li>
        <li><strong>Suspense</strong> - Handles loading states while components load</li>
        <li><strong>Code Splitting</strong> - Vite automatically creates separate chunks</li>
        <li><strong>Dynamic Imports</strong> - ES6 import() for on-demand loading</li>
      </ul>

      <h3>Benefits:</h3>
      <div style={{ marginTop: '15px' }}>
        {benefits.map((benefit, idx) => (
          <div key={idx} style={{ marginBottom: '10px' }}>
            <button onClick={() => setSelectedBenefit(selectedBenefit === idx ? null : idx)} style={{
              padding: '10px 15px',
              width: '100%',
              textAlign: 'left',
              background: selectedBenefit === idx ? '#e3f2fd' : '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              {benefit.title} {selectedBenefit === idx ? '▼' : '▶'}
            </button>
            {selectedBenefit === idx && (
              <p style={{ marginLeft: '15px', marginTop: '8px', color: '#555' }}>
                {benefit.explanation}
              </p>
            )}
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '30px' }}>Implementation in This App</h3>
      <p>
        Each page (Home, Contact, Services, About) is a separate lazy-loaded component. 
        When you navigate to a page, React fetches that specific component from the server 
        and renders it with a loading state until it's ready. There's a 2.5 second artificial 
        delay to simulate real-world network conditions.
      </p>

      <div style={{ marginTop: '20px', padding: '15px', background: '#fff3cd', borderRadius: '4px' }}>
        <strong>Try This:</strong> Open DevTools Network tab → Switch pages → See chunks load in Network tab!
      </div>

      <button onClick={() => setVersion(version + 1)} style={{
        marginTop: '20px',
        padding: '8px 16px',
        background: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Increment Version
      </button>

      <p style={{ marginTop: '30px', fontSize: '0.9rem', color: '#999' }}>
        This About page is also lazily loaded - notice how it loaded when you clicked the About link!
      </p>
    </div>
  );
}

export default About;
