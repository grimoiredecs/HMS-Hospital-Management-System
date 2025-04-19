import React from 'react';
import Dashboard from '../components/Dashboard';

const NurseDashboard = () => {
  const actions = [
    { label: 'Edit Profile', to: '/edit-nurse' },
    { label: 'Retrieve Patient Details', to: '/nurse-patient-details', variant: 'success' },
  ];

  return <Dashboard userType="Nurse" title="Nurse Dashboard" actions={actions} />;
};

export default NurseDashboard;
