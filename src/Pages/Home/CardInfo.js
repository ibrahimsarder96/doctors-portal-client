import React from 'react';

const CardInfo = ({img, cardTitle, bgClass, info}) => {
  return (
    <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
    <figure  className='pl-6'>
      <img src={img} alt="Album"/>
      </figure>
    <div class="card-body text-white">
      <h2 class="card-title">{cardTitle}</h2>
      <p>{info}</p>
    </div>
  </div>
  );
};

export default CardInfo;