import React from 'react';
import Dashboard from '../components/Dashboard';

const AdminDashboard = () => {
  const actions = [
    { label: 'Add Staff', to: '/admin-add-staff', variant: 'primary' },
    { label: 'Remove Staff', to: '/admin-remove-staff', variant: 'danger' },
  ];

  return <Dashboard userType="Admin" title="Admin Dashboard" actions={actions} />;
};

export default AdminDashboard;
