import React from 'react';

function About() {
  return (
    <div className="page">
      <h2>About This Project</h2>
      <p>
        This is Experiment 5.2 - a demonstration of lazy loading and code splitting in React applications.
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
        <li><strong>Code Splitting</strong> - Webpack/Vite automatically creates separate chunks</li>
        <li><strong>Dynamic Imports</strong> - ES6 import() for on-demand loading</li>
      </ul>

      <h3>Benefits</h3>
      <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
        <li>Faster Initial Page Load</li>
        <li>Reduced Bundle Size</li>
        <li>Better Performance on Slow Networks</li>
        <li>Improved User Experience</li>
        <li>Progressive Enhancement</li>
      </ul>

      <h3>Implementation in This App</h3>
      <p>
        Each page (Home, Contact, Dashboard, About) is a separate lazy-loaded component. 
        When you navigate to a page, React fetches that specific component from the server 
        and renders it with a loading state until it's ready.
      </p>

      <p style={{ marginTop: '30px', fontSize: '0.9rem', color: '#999' }}>
        This About page is also lazily loaded - notice how it loaded when you clicked the About link!
      </p>
    </div>
  );
}

export default About;
