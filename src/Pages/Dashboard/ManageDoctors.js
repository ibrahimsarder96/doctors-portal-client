import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {data: doctors, isLoading, refetch} = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))

  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <div class="overflow-x-auto mt-3">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   {
     doctors.map((doctor, index) => <DoctorRow
     key={doctor._id}
     doctor={doctor}
     index={index}
     refetch={refetch}
     setDeletingDoctor={setDeletingDoctor}
     ></DoctorRow>)
   }
    </tbody>
  </table>
  </div>
   {deletingDoctor && <DeleteConfirmModal
   deletingDoctor={deletingDoctor}
   setDeletingDoctor={setDeletingDoctor}
   refetch={refetch}
   ></DeleteConfirmModal>}
    </div>
  );
};

export default ManageDoctors;