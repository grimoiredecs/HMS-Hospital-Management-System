import React from 'react';
import Dashboard from '../components/Dashboard';

const DoctorDashboard = () => {
  const actions = [
    { label: 'Edit Profile', to: '/edit-doctor' },
    { label: 'Retrieve Patient Details', to: '/doctor-patient-details', variant: 'success' },
    { label: 'Update Medical & Health Info', to: '/doctor-update-health', variant: 'warning' },
  ];

  return <Dashboard userType="Doctor" title="Doctor Dashboard" actions={actions} />;
};

export default DoctorDashboard;
