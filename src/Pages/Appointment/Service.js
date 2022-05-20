import React from 'react';


const Service = ({service, setTreatment}) => {
const {name, slots, price} = service;
  return (
    <div className="card lg:max-w-lg  shadow-2xl">
    <div className="card-body text-center">
      <h2 className="text-2xl text-secondary">{name}</h2>
      <p className='text-accent'>{
      slots.length > 0 
      ?
      <span>{slots[0]}</span> :
      <span className='text-red-500'>Try another date.</span>
    }</p>
      <p className='text-accent'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
      <h3 className='text-accent'>price: ${price}</h3>
      <div className="card-actions justify-center">
        <label 
        htmlFor="booking-modal" 
        disabled={slots.length === 0}
        className="btn btn-secondary font-bold text-white uppercase bg-gradient-to-r from-secondary to-primary"
        onClick={() => setTreatment(service)}
        >Book Appointment</label>
      </div>
    </div>
  </div>
  );
};

export default Service;