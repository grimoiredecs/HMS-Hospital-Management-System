import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Homepage
import Homepage from './pages/home';

// Login Pages
import LoginForm from './components/LoginForm';
import AdminLogin from './components/AdminLogin';

// Patient Dashboard + Pages
import PatientDashboard from './pages/PatientDashboard';
import Appointment from './pages/Appointment';
import ViewAppointments from './pages/ViewAppointments';
import PatientEditProfile from './pages/PatientEditProfile';
import ViewBill from './pages/ViewBill'; // ✅ Corrected from ViewBills
import MakePayment from './pages/MakePayment'; // ✅ Confirmed in pages
import RegisterForm from './components/RegisterForm';

// Doctor Dashboard + Pages
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorEditProfile from './pages/DoctorEditProfile';

// Nurse Dashboard + Pages
import NurseDashboard from './pages/NurseDashboard';
import NurseEditProfile from './pages/NurseEditProfile';

// Admin Dashboard + Pages
import AdminDashboard from './pages/AdminDashboard';
import AdminAddStaff from './pages/AdminAddStaff'; // ✅ fixed typo from AddminAddstaff
import AdminRemoveStaff from './pages/AdminRemoveStaff';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Patient Routes */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/book-appointment" element={<Appointment />} />
        <Route path="/view-appointments" element={<ViewAppointments />} />
        <Route path="/edit-profile" element={<PatientEditProfile />} />
        <Route path="/view-bills" element={<ViewBill />} />
        <Route path="/make-payment" element={<MakePayment />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Doctor Routes */}
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-edit-profile" element={<DoctorEditProfile />} />

        {/* Nurse Routes */}
        <Route path="/nurse-dashboard" element={<NurseDashboard />} />
        <Route path="/nurse-edit-profile" element={<NurseEditProfile />} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-add-staff" element={<AdminAddStaff />} />
        <Route path="/admin-remove-staff" element={<AdminRemoveStaff />} />
      </Routes>
    </Router>
  );
}

export default App;
