// src/pages/Appointment.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bookAppointment } from '../services/api';
import './Appointment.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Appointment() {
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!doctor || !date || !time || !reason.trim()) {
      alert('Please fill in all fields!');
      return;
    }

    try {
      const appointmentData = { doctor, date, time, reason };
      await bookAppointment(appointmentData);
      alert('Appointment booked successfully!');
      navigate('/patient-dashboard');
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="appointment-container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg">
        <h3 className="text-center">Book an Appointment</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="doctor" className="form-label">Select Doctor</label>
            <select
              className="form-control"
              id="doctor"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              required
            >
              <option value="">-- Choose a Doctor --</option>
              <option value="Dr. Smith">Dr. Smith - Cardiologist</option>
              <option value="Dr. Johnson">Dr. Johnson - Neurologist</option>
              <option value="Dr. Lee">Dr. Lee - Pediatrician</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">Select Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="time" className="form-label">Select Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="reason" className="form-label">Reason for Appointment</label>
            <textarea
              className="form-control"
              id="reason"
              rows="3"
              placeholder="Enter reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">Book Appointment</button>
        </form>

        <div className="mt-3 text-center">
          <button
            className="btn btn-secondary w-100"
            onClick={() => navigate('/patient-dashboard')}
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
