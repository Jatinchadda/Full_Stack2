import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function NotificationCenter() {
  const { notifications } = useContext(GlobalContext);

  return (
    <div className="card">
      <h2>Notifications ({notifications.length})</h2>
      
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul className="action-list">
          {notifications.map((notif) => (
            <li key={notif.id}>
              <strong>{notif.message}</strong> - {notif.timestamp}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationCenter;
