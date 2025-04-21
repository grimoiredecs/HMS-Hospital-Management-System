// src/pages/AdminRemoveStaff.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeStaff } from '../services/api';
import './AdminRemoveStaff.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminRemoveStaff() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (!userData || userData.type !== 'Admin') {
      alert('Access denied! Only admins can remove staff.');
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert('Please enter a username.');
      return;
    }

    try {
      const result = await removeStaff(username.trim());
      if (result?.success) {
        alert('Staff member removed successfully!');
        setUsername('');
      } else {
        alert(result?.message || 'Staff member not found.');
      }
    } catch (error) {
      console.error('Error removing staff:', error);
      alert('An error occurred while removing staff.');
    }
  };

  return (
    <div className="admin-remove-staff-page d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="admin-remove-staff-card p-4 shadow-lg">
        <h3 className="text-center">Remove Staff</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Enter Staff Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">Remove Staff</button>
        </form>
        <div className="mt-3 text-center">
          <button className="btn btn-secondary w-100" onClick={() => navigate('/admin-dashboard')}>
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminRemoveStaff;
