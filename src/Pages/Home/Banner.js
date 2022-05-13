import React from 'react';
import chair from '../../assets/images/chair.png';


const Banner = () => {
  return (
    <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse xl:max-w-screen-2xl">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold text-black">Your New Smile Starts Here</h1>
      <p class="py-6 text-black">The crew here at Making You Smile doctors portal Dental Studio has the knowledge, experience and technology to deliver the smile you’ve always wanted.</p>
      <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;