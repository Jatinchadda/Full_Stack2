import { Link } from 'react-router-dom'

export default function Contact() {
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
            <h1>Contact Us</h1>
            <p>
            Feel free to reach out to us with any questions or inquiries.
            </p>
            <p>
            <strong>Email:</strong> jatinchadda@gmail.com<br />
            <strong>Phone:</strong> +91 99880 XXXXX<br />
            <strong>Address:</strong> Chandigarh University
            </p>
        </div>
        </div>
    )
}