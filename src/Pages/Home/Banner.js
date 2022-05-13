import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png'


const Banner = () => {
  return (
    <div style={{
      background: `url(${bg})`,
      backgroundSize: 'cover'
    }} className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse xl:max-w-screen-2xl">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-black">Your New Smile Starts Here</h1>
      <p className="py-6 text-accent">The crew here at Making You Smile doctors portal Dental Studio has the knowledge, experience and technology to deliver the smile you’ve always wanted.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
  );
};

export default Banner;