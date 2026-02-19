import React, { useState } from 'react';

function Services() {
  const [selected, setSelected] = useState(null);
  const [ratings, setRatings] = useState({ 'Web Development': 0, 'Mobile Apps': 0, 'Consulting': 0, 'Support': 0 });

  const services = [
    { title: 'Web Development', value: '$999', description: 'Full-stack solutions', details: 'Complete MERN stack, responsive design, and database integration.' },
    { title: 'Mobile Apps', value: '$1.5K', description: 'iOS & Android', details: 'Native and cross-platform mobile development using React Native.' },
    { title: 'Consulting', value: '$500/hr', description: 'Expert guidance', details: 'Technical strategy, architecture reviews, and best practices.' },
    { title: 'Support', value: '24/7', description: 'Premium support', details: 'Round-the-clock support with guaranteed response time.' }
  ];

  const handleRate = (service) => {
    setRatings(prev => ({
      ...prev,
      [service]: (prev[service] || 0) + 1
    }));
  };

  return (
    <div className="page">
      <h2>Services</h2>
      <p>Our services page is lazily loaded using React.lazy() and Suspense. Click on any service to see more details!</p>

      <div className="dashboard-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="card"
            onClick={() => setSelected(selected === index ? null : index)}
            style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
          >
            <h3>{service.value}</h3>
            <p><strong>{service.title}</strong></p>
            <p>{service.description}</p>
            {selected === index && (
              <div style={{ marginTop: '10px', padding: '10px', background: '#f9f9f9', borderRadius: '4px' }}>
                <p><em>{service.details}</em></p>
                <button onClick={(e) => { e.stopPropagation(); handleRate(service.title); }} style={{
                  padding: '5px 10px',
                  background: '#ffc107',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  marginTop: '5px'
                }}>
                  👍 Rate ({ratings[service.title]})
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '30px' }}>Service Features</h3>
      <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginTop: '15px' }}>
        <li>Professional & Affordable Services</li>
        <li>Expert Team with Years of Experience</li>
        <li>Fast & Efficient Solutions</li>
        <li>Dedicated Support & Follow-up</li>
      </ul>

      <p style={{ marginTop: '30px', fontSize: '0.9rem', color: '#999' }}>
        Navigate between pages to see how each chunk loads independently
      </p>
    </div>
  );
}

export default Services;
