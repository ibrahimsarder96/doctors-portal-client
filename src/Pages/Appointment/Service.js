import React from 'react';


const Service = ({service, setTreatment}) => {
const {name, slots} = service;
  return (
    <div class="card lg:max-w-lg  shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-secondary">{name}</h2>
      <p className='text-accent'>{
      slots.length > 0 
      ?
      <span>{slots[0]}</span> :
      <span className='text-red-500'>Try another date.</span>
    }</p>
      <p className='text-accent'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
      <div class="card-actions justify-center">
        <button  class=""></button>
        <label 
        for="booking-modal" 
        disabled={slots.length === 0}
        class="btn btn-secondary font-bold text-white uppercase"
        onClick={() => setTreatment(service)}
        >Book Appointment</label>
      </div>
    </div>
  </div>
  );
};

export default Service;