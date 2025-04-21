import React, { useState } from 'react';
import './UpdateHealthRecord.css';

const UpdateHealthRecord = () => {
  const [form, setForm] = useState({
    patientID: '',
    recordDate: '',
    diagnosis: '',
    allergies: '',
    treatment: '',
    notes: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check required fields
    if (!form.patientID || !form.recordDate || !form.diagnosis || !form.treatment) {
      alert('Please fill all required fields.');
      return;
    }

    console.log('Updated Health Record:', form);
    alert('Medical information updated successfully!');
  };

  return (
    <div className="update-container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg">
        <h3 className="text-center mb-4">Update Medical & Health Info</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Patient ID</label>
            <input
              type="text"
              name="patientID"
              className="form-control"
              value={form.patientID}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Record Date</label>
            <input
              type="date"
              name="recordDate"
              className="form-control"
              value={form.recordDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Diagnosis</label>
            <textarea
              name="diagnosis"
              rows="2"
              className="form-control"
              value={form.diagnosis}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Allergies</label>
            <textarea
              name="allergies"
              rows="2"
              className="form-control"
              value={form.allergies}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Treatment</label>
            <textarea
              name="treatment"
              rows="2"
              className="form-control"
              value={form.treatment}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Notes</label>
            <textarea
              name="notes"
              rows="2"
              className="form-control"
              value={form.notes}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Save Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateHealthRecord;
