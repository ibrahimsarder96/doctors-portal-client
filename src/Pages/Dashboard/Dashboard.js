import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      {/* <!-- Page content here --> */}
      <h1 className='text-4xl font-bold text-purple-500'>Welcome to your Dashboard</h1>
      <Outlet></Outlet>
    
    
    </div> 
    <div class="drawer-side">
      <label for="dashboard-sidebar" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-64 bg-base-100  text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li className='text-accent'><Link to="/dashboard">My Appointments</Link></li>
        <li className='text-accent'><Link to="/dashboard/review">My Review</Link></li>
        <li className='text-accent'><Link to="/dashboard/history">My History</Link></li>
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;