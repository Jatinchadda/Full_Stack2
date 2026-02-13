import { Link } from 'react-router-dom'

export default function About() {
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
        <h1>About Us</h1>
        <p>
          Welcome to our About page. This is where you can learn more about our organization,
          our mission, and our values.
        </p>
        <p>
          We are dedicated to providing excellent service and delivering quality solutions
          to our customers. Our team is composed of experienced professionals who are passionate
          about what they do.
        </p>
      </div>
    </div>
  )
}