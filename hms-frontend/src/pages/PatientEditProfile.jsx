// pages/PatientEditProfile.jsx
import React from 'react';
import EditProfileForm from '../components/EditProfileForm';

const patientFields = [
  { name: 'username', label: 'Username', readOnly: true },
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'phoneNumber', label: 'Phone Number' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'address', label: 'Address' },
  { name: 'password', label: 'New Password (optional)', type: 'password', optional: true },
];

const PatientEditProfile = () => (
  <EditProfileForm userType="Patient" fields={patientFields} dashboardRoute="/patient-dashboard" />
);

export default PatientEditProfile;
