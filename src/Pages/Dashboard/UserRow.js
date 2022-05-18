import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch}) => {
  const {email, role} = user;
  const makeAdmin = () => {
    fetch(`https://safe-ocean-12770.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      if(res.status === 403){
        toast.error('Failed to make an admin')
      }
      return res.json()
    })
    .then(data => {
      if(data.modifiedCount > 0){
        refetch()
        toast.success(`Successfully made an admin`);
      }
    })
  }
  return (
    <div>
       <tr className='text-accent'>
        <th>1</th>
        <td>{user.email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs bg-accent">Make Admin</button>}</td>
        <td><button class="btn btn-xs bg-accent">Remove User</button></td>
      </tr>
    </div>
  );
};

export default UserRow;