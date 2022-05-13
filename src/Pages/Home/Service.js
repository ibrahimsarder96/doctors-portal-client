import React from 'react';

const Service = ({service}) => {
  return (
    <div className="card w-100 bg-base-100 shadow-2xl xl:max-w-screen-2xl">
  <figure className="px-10 pt-10">
    <img src={service.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-accent">{service.name}</h2>
    <p className='text-accent'>{service.description}</p>
  </div>
</div>
  );
};

export default Service;