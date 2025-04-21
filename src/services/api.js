// DUMMY VERSION OF api.js

// Simulated delay function
const simulateDelay = (data, ms = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

// Admin Login
export async function loginAdmin(username, password) {
  const dummyUsers = [
    { username: 'admin1', password: 'admin123', type: 'Admin', fullName: 'Dr. Smith' },
  ];

  const found = dummyUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (found) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(found), 300)
    );
  } else {
    throw new Error('Invalid credentials');
  }
}
// Dummy general login for patients, doctors, nurses
export async function loginUser(username, password) {
  const dummyUsers = [
    { username: 'john', password: '1234', type: 'Patient', fullName: 'John Doe' },
    { username: 'drsmith', password: 'abcd', type: 'Doctor', fullName: 'Dr. Smith' },
    { username: 'nurseamy', password: 'pass', type: 'Nurse', fullName: 'Nurse Amy' },
  ];

  const found = dummyUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (found) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(found), 300)
    );
  } else {
    throw new Error('Invalid credentials');
  }
}


// Get Departments
export async function getDepartments() {
  const departments = [
    { id: 1, name: 'Cardiology' },
    { id: 2, name: 'Neurology' },
    { id: 3, name: 'Pediatrics' },
  ];
  return simulateDelay(departments);
}

// Add Staff
export async function addStaff(staffData) {
  console.log('Dummy staff added:', staffData);
  return simulateDelay({ success: true, message: 'Staff added successfully.' });
}

// Remove Staff
export async function removeStaff(username) {
  console.log(`Dummy staff removed: ${username}`);
  return simulateDelay({ success: true, message: 'Staff removed successfully.' });
}

// Book Appointment
export async function bookAppointment(appointmentData) {
  console.log('Dummy appointment booked:', appointmentData);
  return simulateDelay({ success: true });
}

// Get Appointments (for patient)
export async function getAppointmentsByPatient(patientId) {
  const dummyAppointments = [
    {
      id: 1,
      date: '2025-04-25',
      time: '10:00 AM',
      doctor: 'Dr. Smith',
      department: 'Cardiology',
      status: 'Confirmed',
    },
    {
      id: 2,
      date: '2025-04-27',
      time: '1:30 PM',
      doctor: 'Dr. Miller',
      department: 'Neurology',
      status: 'Pending',
    },
  ];
  return simulateDelay(dummyAppointments);
}

// Get Bills (for patient)
export async function getBillsByPatient(patientId) {
  const dummyBills = [
    {
      billId: 'BILL-001',
      date: '2025-04-15',
      amount: 250.0,
      service: 'Consultation',
      status: 'Paid',
    },
    {
      billId: 'BILL-002',
      date: '2025-04-20',
      amount: 450.0,
      service: 'MRI Scan',
      status: 'Unpaid',
    },
  ];
  return simulateDelay(dummyBills);
}

// Make Payment
export async function makePayment(paymentData) {
  console.log('Dummy payment submitted:', paymentData);
  return simulateDelay({ success: true, message: 'Payment processed successfully.' });
}
