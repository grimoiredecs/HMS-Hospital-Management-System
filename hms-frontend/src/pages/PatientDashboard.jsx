import React from 'react';
import Dashboard from '../components/Dashboard';

const PatientDashboard = () => {
  const actions = [
    { label: 'Book an Appointment', to: '/appointment', variant: 'primary' },
    { label: 'View Appointments', to: '/view-appointments', variant: 'secondary' },
    { label: 'Update Profile', to: '/edit-patient', variant: 'warning' },
    { label: 'View Bills', to: '/view-bill', variant: 'info' },
    { label: 'Make Payment', to: '/make-payment', variant: 'success' },
  ];

  return <Dashboard userType="Patient" title="Patient Dashboard" actions={actions} />;
};

export default PatientDashboard;
