import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth) ;
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
    <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* <!-- Page content here --> */}
      <h1 className='text-4xl font-bold text-purple-500'>Welcome to your Dashboard</h1>
      <Outlet></Outlet>
    
    
    </div> 
    <div className="drawer-side">
      <label for="dashboard-sidebar" className="drawer-overlay"></label> 
      <ul className="menu p-4 overflow-y-auto w-64 bg-base-100  text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li className='text-accent'><Link to="/dashboard">My Appointments</Link></li>
        <li className='text-accent'><Link to="/dashboard/review">My Review</Link></li>
        <li className='text-accent'><Link to="/dashboard/history">My History</Link></li>
       
       
        {admin && 
        <>
        <li className='text-accent'><Link to="/dashboard/users">All Users</Link></li>
        <li className='text-accent'><Link to="/dashboard/addDoctor">Add A Doctor</Link></li>
        <li className='text-accent'><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>
        </>
        }
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;