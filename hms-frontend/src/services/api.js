const API_BASE = 'http://localhost:5000/api'; // Replace with your backend URL

// =======================
// 🔐 LOGIN
// =======================

// Admin Login
export async function loginAdmin(username, password) {
  const res = await fetch(`${API_BASE}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    console.error('Admin login failed with status:', res.status);
    return null;
  }

  return res.json();
}

// General User Login (Patient, Doctor, Nurse)
export async function loginUser(username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  return res; // raw response for error handling
}

// =======================
// 👤 PATIENT
// =======================

// Register a new patient
export async function registerPatient(patientData) {
  const res = await fetch(`${API_BASE}/patients/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patientData),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error('Patient registration failed:', error);
    throw new Error(`Registration failed: ${res.status}`);
  }

  return res.json();
}

// =======================
// 👨‍⚕️ STAFF MANAGEMENT
// =======================

// Add a new staff (Doctor or Nurse)
export async function addStaff(staffData) {
  const res = await fetch(`${API_BASE}/staff`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(staffData),
  });

  if (!res.ok) {
    throw new Error(`Add staff failed. Status: ${res.status}`);
  }

  return res.json();
}

// Remove staff by username
export async function removeStaff(username) {
  const res = await fetch(`${API_BASE}/staff/${username}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    console.error(`Remove staff failed. Status: ${res.status}`);
    return { success: false, message: 'Failed to remove staff.' };
  }

  return res.json();
}

// =======================
// 🏥 DEPARTMENTS
// =======================

// Fetch all departments
export async function getDepartments() {
  const res = await fetch(`${API_BASE}/departments`);

  if (!res.ok) {
    console.error('Failed to fetch departments. Status:', res.status);
    return [];
  }

  return res.json();
}

// =======================
// 📅 APPOINTMENTS
// =======================

// Book an appointment
export async function bookAppointment(appointmentData) {
  const res = await fetch(`${API_BASE}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appointmentData),
  });

  if (!res.ok) {
    throw new Error(`Failed to book appointment: ${res.status}`);
  }

  return res.json();
}

// =======================
// 💰 PAYMENTS
// =======================

// Add a payment record
export async function addPayment(paymentData) {
  const res = await fetch(`${API_BASE}/payments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentData),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Payment failed:', errorText);
    throw new Error(`Payment failed. Status: ${res.status}`);
  }

  return res.json();
}
// Get appointments by patient ID
export async function getAppointmentsByPatient(patientId) {
    const res = await fetch(`${API_BASE}/appointments/patient/${patientId}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch appointments. Status: ${res.status}`);
    }
    return res.json();
  }
  
  // Get bills by patient ID
  export async function getBillsByPatient(patientId) {
    const res = await fetch(`${API_BASE}/bills/patient/${patientId}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch bills. Status: ${res.status}`);
    }
    return res.json();
  }