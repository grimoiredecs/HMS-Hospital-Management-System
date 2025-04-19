// src/pages/Homepage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css'; // optional if you want to keep extra styles

function Homepage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToAdminLogin = () => {
    navigate('/admin-login');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="mb-4">Welcome to the Hospital Management System</h1>
        <p className="lead">Manage appointments, patient records, billing, and staff efficiently.</p>

        {/* Separate login buttons */}
        <div className="d-grid gap-3 mt-4">
          <button className="btn btn-primary btn-lg" onClick={goToLogin}>
            Patient / Employee Login
          </button>
          <button className="btn btn-danger btn-lg" onClick={goToAdminLogin}>
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
