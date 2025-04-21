// src/pages/Homepage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';

function Homepage() {
  const navigate = useNavigate();

  const goToLogin = () => navigate('/login');
  const goToAdminLogin = () => navigate('/admin-login');

  return (
    <div className="homepage-wrapper">
      {/* NAVBAR */}


      
      <nav className="navbar navbar-light bg-light px-4">
        <div className="d-flex align-items-center">
          <img src="/bachkhoa_logo.png" alt="Logo" className="cornerlogo me-2" />
          <span className="navbar-brand mb-0 h1">HCMUT HMS</span>
        </div>
        <a href="#contact" className="btn btn-outline-primary">Contact Us</a>
      </nav>


      <section className="image-section">
        <h1 className="homepage-top"></h1>
      </section>
      {/* MAIN SPLIT */}
      <div className="homepage-vertical">
        {/* Left: Background */}
       

        {/* Right: Login */}
        <div className="homepage-bottom d-flex justify-content-center align-items-center">
          <div className="homepage-box text-center">
            <h1 className="mb-3">Welcome to the Hospital Management System</h1>
            <p className="lead mb-4">
              Manage appointments, patient records, billing, and staff efficiently.
            </p>

            <div className="d-grid gap-3">
              <button className="btn btn-primary btn-lg" onClick={goToLogin}>
                Patient / Employee Login
              </button>
              <button className="btn btn-danger btn-lg" onClick={goToAdminLogin}>
                Admin Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer bg-dark text-white py-3 mt-auto">
  <div className="container d-flex justify-content-between align-items-center">
    <div className="footer-left">
      © 2025 CC01 Group 1 HMS
    </div>
    <div className="footer-right text-end">
      <p className="mb-1 fw-bold">About Us</p>
      <p className="mb-0 small">
        {/* INSERT your own info here */}
        <p>Dinh Gia Kiet </p>
        <p>Nguyen Tien Khang</p>
        <p>Phan Tran Y Nhi </p>
        <p>Tran Nguyen Anh Khoa</p>
      </p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Homepage;
