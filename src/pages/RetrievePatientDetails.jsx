// src/pages/RetrievePatientDetails.jsx
import React, { useState } from 'react';
import './RetrievePatientDetails.css';

const dummyPatients = [
  {
    patientID: 'P001',
    firstName: 'Alice',
    lastName: 'Johnson',
    dob: '1989-05-15',
    phoneNumber: '123-456-7890',
    email: 'alice@example.com',
    address: '123 Main St',
    medicalHistory: 'Diabetes, Hypertension',
    prescriptions: 'Metformin, Lisinopril',
    allergies: 'Peanuts',
    treatmentNotes: 'Regular checkups required.',
  },
  {
    patientID: 'P002',
    firstName: 'Bob',
    lastName: 'Smith',
    dob: '1982-09-21',
    phoneNumber: '987-654-3210',
    email: 'bob@example.com',
    address: '456 Elm St',
    medicalHistory: 'Asthma, Previous Surgery',
    prescriptions: 'Inhaler, Painkillers',
    allergies: 'None',
    treatmentNotes: 'Monitor breathing improvements.',
  },
];

const RetrievePatientDetails = () => {
  const [criteria, setCriteria] = useState('patientID');
  const [search, setSearch] = useState('');
  const [patient, setPatient] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const val = search.trim().toLowerCase();

    const result = dummyPatients.find((p) => {
      if (criteria === 'patientID') return p.patientID.toLowerCase() === val;
      if (criteria === 'name') return (
        p.firstName.toLowerCase() === val ||
        p.lastName.toLowerCase() === val ||
        `${p.firstName.toLowerCase()} ${p.lastName.toLowerCase()}` === val
      );
      return false;
    });

    if (result) {
      setPatient(result);
    } else {
      alert('Patient not found.');
      setPatient(null);
    }
  };

  return (
    <div className="retrieve-container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg">
        <h3 className="text-center">Retrieve Patient Details</h3>
        <form onSubmit={handleSearch}>
          <div className="mb-3">
            <label className="form-label">Search by</label>
            <select className="form-control" value={criteria} onChange={(e) => setCriteria(e.target.value)}>
              <option value="patientID">Patient ID</option>
              <option value="name">Patient Name</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Search Value</label>
            <input
              type="text"
              className="form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">Search</button>
        </form>

        {patient && (
          <div className="mt-4 text-start">
            <h5>Patient Information</h5>
            <p><strong>Name:</strong> {patient.firstName} {patient.lastName}</p>
            <p><strong>DOB:</strong> {patient.dob}</p>
            <p><strong>Phone:</strong> {patient.phoneNumber}</p>
            <p><strong>Email:</strong> {patient.email}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <h5>Medical Info</h5>
            <p><strong>History:</strong> {patient.medicalHistory}</p>
            <p><strong>Prescriptions:</strong> {patient.prescriptions}</p>
            <p><strong>Allergies:</strong> {patient.allergies}</p>
            <p><strong>Treatment Notes:</strong> {patient.treatmentNotes}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetrievePatientDetails;
