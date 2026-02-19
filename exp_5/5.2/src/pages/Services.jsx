import React from 'react';

function Services() {
  const services = [
    { title: 'Web Development', value: '$999', description: 'Full-stack solutions' },
    { title: 'Mobile Apps', value: '$1.5K', description: 'iOS & Android' },
    { title: 'Consulting', value: '$500/hr', description: 'Expert guidance' },
    { title: 'Support', value: '24/7', description: 'Premium support' }
  ];

  return (
    <div className="page">
      <h2>Services</h2>
      <p>Our services page is lazily loaded using React.lazy() and Suspense.</p>

      <div className="dashboard-grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service.value}</h3>
            <p><strong>{service.title}</strong></p>
            <p>{service.description}</p>
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
