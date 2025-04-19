// components/EditProfile.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ userType, fields, dashboardRoute }) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (!userData || userData.type !== userType) {
      alert(`Access denied! Only ${userType.toLowerCase()}s can edit their profile.`);
      navigate('/login');
      return;
    }

    const initial = {};
    fields.forEach(f => initial[f.name] = userData[f.name] || '');
    setFormData(initial);
  }, [userType, fields, navigate]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const updatedUser = { ...userData };

    fields.forEach(f => {
      const value = formData[f.name];
      if (!f.readOnly) {
        if (f.optional && !value) return;
        updatedUser[f.name] = value;
      }
    });

    sessionStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
    alert('Profile updated successfully!');
    navigate(dashboardRoute);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: 400 }}>
        <h3 className="text-center">Edit {userType} Profile</h3>
        <form onSubmit={handleSubmit}>
          {fields.map(({ name, label, type = 'text', readOnly }) => (
            <div className="mb-3" key={name}>
              <label htmlFor={name} className="form-label">{label}</label>
              <input
                type={type}
                id={name}
                name={name}
                className="form-control"
                value={formData[name] || ''}
                onChange={handleChange}
                disabled={readOnly}
              />
            </div>
          ))}
          <button type="submit" className="btn btn-primary w-100">Save Changes</button>
        </form>
        <div className="mt-3 text-center">
          <button onClick={() => navigate(dashboardRoute)} className="btn btn-secondary w-100">
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
