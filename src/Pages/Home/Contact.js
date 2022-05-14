import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
  return (
    <section style={{
      background: `url(${appointment})`
    }} className='justify-center my-28 py-24'>
      <div className='text-center'>
        <h1 className='text-primary font-bold text-xl'>Contact Us</h1>
        <h2 className='text-white text-3xl'>Stay connected with us</h2>
      </div>
      <div className='grid grid-cols-1 gap-3 justify-items-center'>
      <input type="text" placeholder="Email Address" className="input input-bordered input-info w-full max-w-xs my-4 text-accent text-xl"/>
      <input type="text" placeholder="Subject" className="input input-bordered input-info w-full max-w-xs text-accent text-xl" />
      <textarea type="text" placeholder="Your message" className="input input-bordered input-info w-full max-w-xs h-36 text-accent text-xl" />
     
      <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default Contact;