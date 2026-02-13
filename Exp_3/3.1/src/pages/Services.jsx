import { Link } from 'react-router-dom'

export default function Services() {
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
        <h1>Our Services</h1>
        <p>
          We offer a wide range of services to meet your needs:
        </p>
        <ul>
          <li>Web Development</li>
          <li>Mobile Application Development</li>
          <li>Consulting Services</li>
          <li>Technical Support</li>
          <li>Cloud Solutions</li>
        </ul>
      </div>
    </div>
  )
}