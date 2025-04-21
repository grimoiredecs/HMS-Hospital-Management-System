import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MakePayment.css';

function MakePayment() {
  const navigate = useNavigate();

  const [bill, setBill] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardInfo, setCardInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

  useEffect(() => {
    const storedBill = JSON.parse(sessionStorage.getItem('selectedBill'));
    if (!storedBill) {
      alert('No bill selected for payment.');
      navigate('/viewbill');
    } else {
      setBill(storedBill);
    }
  }, [navigate]);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if ((paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') &&
        (!cardInfo.cardNumber || !cardInfo.expiryDate || !cardInfo.cvv)) {
      alert('Please fill in all card details.');
      return;
    }

    const payment = {
      payment_id: 'P' + Math.floor(1000 + Math.random() * 9000),
      payment_date: new Date().toISOString().split('T')[0],
      payment_amount: bill.total_amount,
      payment_method: paymentMethod,
      payment_status: 'Completed'
    };

    // Simulate storing in localStorage (later: use backend)
    const payments = JSON.parse(localStorage.getItem('payments')) || [];
    payments.push(payment);
    localStorage.setItem('payments', JSON.stringify(payments));

    // Update bill status
    const bills = JSON.parse(localStorage.getItem('bills')) || [];
    const updatedBills = bills.map(b =>
      b.bill_id === bill.bill_id
        ? { ...b, payment_status: 'Paid', payment_date: payment.payment_date }
        : b
    );
    localStorage.setItem('bills', JSON.stringify(updatedBills));

    alert(`Payment successful via ${paymentMethod}!`);
    navigate('/view-bill');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg make-payment-card">
        <h3 className="text-center">Make Payment</h3>
        {bill && (
          <p id="billDetails">
            <strong>Bill ID:</strong> {bill.bill_id}<br />
            <strong>Appointment ID:</strong> {bill.appointment_id}<br />
            <strong>Amount:</strong> ${bill.total_amount}
          </p>
        )}

        <form onSubmit={handlePaymentSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="paymentMethod">Select Payment Method</label>
            <select
              id="paymentMethod"
              className="form-control"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">-- Select Payment Method --</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          {(paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && (
            <>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  className="form-control"
                  value={cardInfo.cardNumber}
                  onChange={(e) => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                <input
                  type="month"
                  id="expiryDate"
                  className="form-control"
                  value={cardInfo.expiryDate}
                  onChange={(e) => setCardInfo({ ...cardInfo, expiryDate: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cvv" className="form-label">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  className="form-control"
                  value={cardInfo.cvv}
                  onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-success w-100">Pay Now</button>
        </form>

        <div className="mt-3 text-center">
          <button className="btn btn-secondary w-100" onClick={() => navigate('/patient-dashboard')}>
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default MakePayment;
    