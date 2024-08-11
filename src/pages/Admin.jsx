import React from 'react';
import AdminDashboard from '../components/AdminDashboard';

function Admin() {
  return (
    <div className="container flex flex-col items-center mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <AdminDashboard />
    </div>
  );
}

export default Admin;