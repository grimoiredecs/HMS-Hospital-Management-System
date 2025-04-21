// src/components/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../services/api';
import './LoginForm.css'; // Reuse styling from LoginForm

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const admin = await loginAdmin(username, password);
      if (!admin) {
        throw new Error('Invalid credentials');
      }

      sessionStorage.setItem('loggedInUser', JSON.stringify(admin));
      alert('Admin Login Successful!');
      navigate('/admin-dashboard');
    } catch (err) {
      console.error('Admin login failed:', err);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg login-card">
        <h3 className="text-center">Admin Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="admin-username" className="form-label">Username</label>
            <input
              type="text"
              id="admin-username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="admin-password" className="form-label">Password</label>
            <input
              type="password"
              id="admin-password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">Login as Admin</button>
        </form>

        <div className="mt-3 text-center">
          <a href="/" className="btn btn-secondary w-100">Return to Homepage</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
