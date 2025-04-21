// pages/ViewBills.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBillsByPatient } from '../services/api';
import './ViewBill.css';

function ViewBills() {
  const navigate = useNavigate();
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (!user || user.type !== 'Patient') {
      alert('Access denied.');
      navigate('/login');
      return;
    }

    getBillsByPatient(user.patientID)
      .then(setBills)
      .catch((err) => {
        console.error('Error fetching bills:', err);
        setBills([]);
      });
  }, [navigate]);

  const handlePayNow = (bill) => {
    sessionStorage.setItem('selectedBill', JSON.stringify(bill));
    navigate('/make-payment');
  };

  return (
    <div className="view-bills-page d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg">
        <h3 className="text-center mb-3">Your Bills</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Bill ID</th>
              <th>Appointment</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date / Pay</th>
            </tr>
          </thead>
          <tbody>
            {bills.length === 0 ? (
              <tr><td colSpan="5" className="text-center">No bills found.</td></tr>
            ) : (
              bills.map((b, i) => (
                <tr key={i}>
                  <td>{b.bill_id}</td>
                  <td>{b.appointment_id}</td>
                  <td>${b.total_amount}</td>
                  <td>{b.payment_status}</td>
                  <td>
                    {b.payment_status === 'Paid'
                      ? b.payment_date
                      : <button className="btn btn-sm btn-primary" onClick={() => handlePayNow(b)}>Pay Now</button>}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <button className="btn btn-secondary w-100 mt-3" onClick={() => navigate('/patient-dashboard')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default ViewBills;
