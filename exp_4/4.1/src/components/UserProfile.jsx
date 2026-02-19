import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function UserProfile() {
  const { user, updateUser } = useContext(GlobalContext);
  const [editName, setEditName] = useState(user.name);
  const [editEmail, setEditEmail] = useState(user.email);
  const [editRole, setEditRole] = useState(user.role);

  const handleUpdate = () => {
    updateUser({
      name: editName,
      email: editEmail,
      role: editRole
    });
  };

  return (
    <div className="card">
      <h2>User Profile</h2>
      
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>

      <div className="control-group">
        <label>Name</label>
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
      </div>

      <div className="control-group">
        <label>Email</label>
        <input
          type="email"
          value={editEmail}
          onChange={(e) => setEditEmail(e.target.value)}
        />
      </div>

      <div className="control-group">
        <label>Role</label>
        <input
          type="text"
          value={editRole}
          onChange={(e) => setEditRole(e.target.value)}
        />
      </div>

      <button className="btn-primary" onClick={handleUpdate} style={{ width: '100%' }}>
        Update
      </button>
    </div>
  );
}

export default UserProfile;
