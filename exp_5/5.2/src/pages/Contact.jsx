import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="page">
      <h2>Contact Us</h2>
      <p>This page is lazily loaded. Send us a message!</p>

      {submitted ? (
        <div style={{ 
          padding: '20px', 
          background: '#d4edda', 
          border: '1px solid #c3e6cb',
          borderRadius: '4px',
          color: '#155724'
        }}>
          <strong>Message Sent!</strong> Thank you for contacting us.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      )}

      <p style={{ marginTop: '30px', fontSize: '0.9rem', color: '#999' }}>
        This Contact page is code-split and only loaded when you navigate here using React.lazy()
      </p>
    </div>
  );
}

export default Contact;
