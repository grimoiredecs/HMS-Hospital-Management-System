// components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ userType, title, actions }) => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (!user || user.type !== userType) {
      alert(`Access denied! Only ${userType.toLowerCase()}s can access this page.`);
      navigate('/admin-login');
    } else {
      setAuthorized(true);
    }
  }, [userType, navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    navigate('/admin-login');
  };

  if (!authorized) {
    return null; // prevent rendering until authorized
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg text-center">
        <h3>{title}</h3>
        <div className="d-grid gap-3 mt-4">
          {actions.map(({ label, to, variant = 'primary' }, index) => (
            <button
              key={index}
              onClick={() => navigate(to)}
              className={`btn btn-${variant}`}
            >
              {label}
            </button>
          ))}
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
