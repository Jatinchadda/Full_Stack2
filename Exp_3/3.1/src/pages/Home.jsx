import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="app-container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="page-content">
        <h1>Welcome to Home Page</h1>
        <p>
          This is a multi-page Single Page Application (SPA) built with React Router.
          You can navigate between different pages without reloading the page.
        </p>
        <p>
          Use the navigation menu above to explore different sections of the application.
        </p>
      </div>
    </div>
  )
}