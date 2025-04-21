// pages/NurseEditProfile.jsx
import React from 'react';
import EditProfileForm from '../components/EditProfileForm';

const nurseFields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'phoneNumber', label: 'Phone Number' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'department', label: 'Department' },
  { name: 'password', label: 'New Password (optional)', type: 'password', optional: true },
];

const NurseEditProfile = () => (
  <EditProfileForm userType="Nurse" fields={nurseFields} dashboardRoute="/nurse-dashboard" />
);

export default NurseEditProfile;
