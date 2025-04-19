// components/RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    address: '',
    type: 'Patient',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      username, password, firstName, lastName,
      dateOfBirth, phoneNumber, email, address
    } = formData;

    if (!username || !password || !firstName || !lastName || !dateOfBirth || !phoneNumber || !email || !address) {
      alert("All fields are required!");
      return;
    }

    try {
      // 🔁 Replace this with real API call later
      const users = JSON.parse(localStorage.getItem('users')) || [];

      if (users.some(user => user.username === username)) {
        alert("Username already exists!");
        return;
      }

      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));

      alert("Registration successful!");
      navigate('/login');
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg register-card">
        <h3 className="text-center">Patient Registration</h3>
        <form onSubmit={handleSubmit}>
          {[
            { name: 'username', label: 'Username' },
            { name: 'password', label: 'Password', type: 'password' },
            { name: 'firstName', label: 'First Name' },
            { name: 'lastName', label: 'Last Name' },
            { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
            { name: 'phoneNumber', label: 'Phone Number' },
            { name: 'email', label: 'Email', type: 'email' }
          ].map(({ name, label, type = 'text' }) => (
            <div className="mb-3" key={name}>
              <label htmlFor={name} className="form-label">{label}</label>
              <input
                type={type}
                id={name}
                name={name}
                className="form-control"
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea
              id="address"
              name="address"
              className="form-control"
              rows="2"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

        <div className="mt-3 text-center">
          <button className="btn btn-secondary w-100" onClick={() => navigate('/login')}>
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
