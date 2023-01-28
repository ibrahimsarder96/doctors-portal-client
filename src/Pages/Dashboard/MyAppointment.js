import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth) ;
  const navigate = useNavigate();
  useEffect( () =>{
    fetch(`https://safe-ocean-12770.herokuapp.com/booking?patient=${user.email}`, {
      method: 'GET',
      headers: {
        'Authorization' : ` Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      if(res.status === 401 || res.status === 403){
        navigate('/')
        signOut(auth)
        localStorage.removeItem('accessToken');
      }
      return res.json()
    })
    .then(data => {
      setAppointments(data)
    })
  },[user])
  return (
    <div>
      <div className="overflow-x-auto pt-6">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    {
      appointments.map((a, index) => <tr className='text-accent'>
        <th>{index + 1}</th>
        <td>{a.patientName}</td>
        <td>{a.date}</td>
        <td>{a.slot}</td>
        <td>{a.treatment}</td>
        <td>
          {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-sm btn-success '>pay</button></Link>}
          {(a.price && a.paid) && <span className='text-success'>paid</span>}
        </td>
      </tr>)
    }
      
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyAppointment;