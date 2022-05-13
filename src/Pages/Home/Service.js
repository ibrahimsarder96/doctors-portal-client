import React from 'react';

const Service = ({service}) => {
  return (
    <div class="card w-100 bg-base-100 shadow-2xl xl:max-w-screen-2xl">
  <figure class="px-10 pt-10">
    <img src={service.img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-accent">{service.name}</h2>
    <p className='text-accent'>{service.description}</p>
  </div>
</div>
  );
};

export default Service;