// pages/DoctorEditProfile.jsx
import React from 'react';
import EditProfileForm from '../components/EditProfileForm';

const doctorFields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'specialization', label: 'Specialization' },
  { name: 'phoneNumber', label: 'Phone Number' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'department', label: 'Department' },
];

const DoctorEditProfile = () => (
  <EditProfileForm userType="Doctor" fields={doctorFields} dashboardRoute="/doctor-dashboard" />
);

export default DoctorEditProfile;
