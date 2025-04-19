import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api'; // assumes this function exists
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(username, password);
      if (!res.ok) {
        throw new Error('Invalid credentials');
      }

      const user = await res.json();

      if (user.type === 'Admin') {
        alert('Admins must use the Admin Login page.');
        navigate('/admin-login');
        return;
      }

      sessionStorage.setItem('loggedInUser', JSON.stringify(user));
      alert('Login Successful!');

      switch (user.type) {
        case 'Patient':
          navigate('/patient-dashboard');
          break;
        case 'Doctor':
          navigate('/doctor-dashboard');
          break;
        case 'Nurse':
          navigate('/nurse-dashboard');
          break;
        default:
          alert('Unknown user type.');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg login-card">
        <h3 className="text-center">HMS Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center mt-3">
          <p>Don't have an account? <a href="/register" className="btn btn-link">Register Here</a></p>
        </div>
        <div className="mt-3 text-center">
          <a href="/" className="btn btn-secondary w-100">Return to Homepage</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
