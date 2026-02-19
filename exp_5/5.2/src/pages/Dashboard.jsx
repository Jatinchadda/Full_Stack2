import React from 'react';

function Dashboard() {
  const stats = [
    { title: 'Total Users', value: '1,234', description: 'Active users' },
    { title: 'Revenue', value: '$45.2K', description: 'This month' },
    { title: 'Orders', value: '567', description: 'Pending orders' },
    { title: 'Conversion', value: '3.2%', description: 'Rate' }
  ];

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <p>This dashboard page is lazily loaded using React.lazy() and Suspense.</p>

      <div className="dashboard-grid">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <h3>{stat.value}</h3>
            <p><strong>{stat.title}</strong></p>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '30px' }}>Performance Insights</h3>
      <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginTop: '15px' }}>
        <li>Page Load Time: Optimized with code splitting</li>
        <li>Bundle Size: Reduced by lazy loading non-critical pages</li>
        <li>User Experience: Faster initial load with on-demand loading</li>
        <li>Network: Only loads required code chunks</li>
      </ul>

      <p style={{ marginTop: '30px', fontSize: '0.9rem', color: '#999' }}>
        Navigate between pages to see how each chunk loads independently
      </p>
    </div>
  );
}

export default Dashboard;
