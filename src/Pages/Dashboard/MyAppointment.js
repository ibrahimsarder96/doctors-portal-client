import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth'

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth) 
  useEffect( () =>{
    fetch(`http://localhost:5000/booking?patient=${user.email}`)
    .then(res => res.json())
    .then(data => setAppointments(data))
  },[user])
  return (
    <div>
      <div class="overflow-x-auto pt-6">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
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
      </tr>)
    }
      
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyAppointment;