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
import ViewBill from './pages/ViewBill';
import MakePayment from './pages/MakePayment';
import RegisterForm from './components/RegisterForm';

// Doctor Dashboard + Pages
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorEditProfile from './pages/DoctorEditProfile';
import RetrievePatientDetails from './pages/RetrievePatientDetails'; // ✅ New
import UpdateHealthRecord from './pages/UpdateHealthRecord';         // ✅ New

// Nurse Dashboard + Pages
import NurseDashboard from './pages/NurseDashboard';
import NurseEditProfile from './pages/NurseEditProfile';

// Admin Dashboard + Pages
import AdminDashboard from './pages/AdminDashboard';
import AdminAddStaff from './pages/AdminAddStaff';
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
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/view-appointments" element={<ViewAppointments />} />
        <Route path="/edit-patient" element={<PatientEditProfile />} />
        <Route path="/viewbill" element={<ViewBill />} />
        <Route path="/make-payment" element={<MakePayment />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Doctor Routes */}
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/edit-doctor" element={<DoctorEditProfile />} />
        <Route path="/doctor-patient-details" element={<RetrievePatientDetails />} /> {/* ✅ Fixed */}
        <Route path="/doctor-update-health" element={<UpdateHealthRecord />} />       {/* ✅ Added */}

        {/* Nurse Routes */}
        <Route path="/nurse-dashboard" element={<NurseDashboard />} />
        <Route path="/edit-nurse" element={<NurseEditProfile />} />
        <Route path="/nurse-patient-details" element={<RetrievePatientDetails />} /> {/* ✅ Fixed */}


        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-add-staff" element={<AdminAddStaff />} />
        <Route path="/admin-remove-staff" element={<AdminRemoveStaff />} />
      </Routes>
    </Router>
  );
}

export default App;
