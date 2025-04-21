// pages/ViewAppointments.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAppointmentsByPatient } from '../services/api';
import './ViewAppointments.css';

function ViewAppointments() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (!user || user.type !== 'Patient') {
      alert('Access denied.');
      navigate('/login');
      return;
    }

    getAppointmentsByPatient(user.patientID)
      .then(setAppointments)
      .catch((err) => {
        console.error('Error fetching appointments:', err);
        setAppointments([]);
      });
  }, [navigate]);

  return (
    <div className="view-appointments-page d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg">
        <h3 className="text-center mb-3">Your Appointments</h3>
        <ul className="list-group">
          {appointments.length === 0 ? (
            <li className="list-group-item text-center">No appointments found.</li>
          ) : (
            appointments.map((a, i) => (
              <li key={i} className="list-group-item">
                <strong>Date:</strong> {a.date} <br />
                <strong>Time:</strong> {a.time} <br />
                <strong>Doctor:</strong> {a.doctor} <br />
                <strong>Reason:</strong> {a.reason}
              </li>
            ))
          )}
        </ul>
        <button className="btn btn-secondary w-100 mt-3" onClick={() => navigate('/patient-dashboard')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default ViewAppointments;
