// src/pages/AdminAddStaff.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDepartments, addStaff } from '../services/api'; // ✅ Make sure addStaff is imported
import './AdminAddStaff.css';

function AdminAddStaff() {
  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    staffType: 'Doctor',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    specialization: '',
    phoneNumber: '',
    email: '',
    department: '',
  });

  useEffect(() => {
    getDepartments()
      .then((data) => setDepartments(data))
      .catch((err) => console.error('Error fetching departments:', err));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const required = ['firstName', 'lastName', 'username', 'password', 'phoneNumber', 'email', 'department'];
    const missing = required.some((field) => formData[field].trim() === '');

    if (missing) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      await addStaff(formData);
      alert(`${formData.staffType} added successfully!`);
      navigate('/admin-dashboard');
    } catch (err) {
      console.error('Add staff failed:', err);
      alert('Failed to add staff. Please try again.');
    }
  };

  return (
    <div className="admin-add-staff-page">
      <div className="admin-add-staff-card shadow-lg">
        <h3 className="text-center mb-4">Add Staff</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="staffType" className="form-label">Type</label>
            <select id="staffType" className="form-control" value={formData.staffType} onChange={handleChange}>
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" id="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" id="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" id="username" className="form-control" value={formData.username} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} required />
          </div>

          {formData.staffType === 'Doctor' && (
            <div className="mb-3">
              <label htmlFor="specialization" className="form-label">Specialization</label>
              <input type="text" id="specialization" className="form-control" value={formData.specialization} onChange={handleChange} />
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="text" id="phoneNumber" className="form-control" value={formData.phoneNumber} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="department" className="form-label">Department</label>
            <select id="department" className="form-control" value={formData.department} onChange={handleChange} required>
              <option value="">-- Select Department --</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
            {departments.length === 0 && (
              <small className="text-muted">Loading departments...</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">Add Staff</button>
        </form>

        <div className="mt-3 text-center">
          <button onClick={() => navigate('/admin-dashboard')} className="btn btn-secondary w-100">
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminAddStaff;
