import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section style={{
      background: `url(${appointment})`
    }} className='flex justify-center items-center'>
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-100px]' src={doctor} alt="" />
      </div>
      <div className='flex-1'>
        <h1 className='text-primary text-xl my-4 font-bold'>Appointment</h1>
        <h2 className='text-white text-2xl my-4 font-bold'>Make an Appointment Today</h2>
        <p className='text-white my-4'>Plan enough time off from work or school to feel less rushed or anxious about getting back. When you make your appointment, ask how long a cleaning and exam usually take, then add extra time to that. You'll be in the dentist's chair longer if it's been a while since your last visit. An end-of-day appointment is a good option so you can go right home.If you have dental insurance, see if your dentist is in-network prior to making yur appointment to save money. You may have to pay a co-pay when you're at the office, or your dentist might bill you the balance after your insurance pays them. If you don't have insurance, find out ahead of time how much you should plan to pay at your appointment.On the day, get there early so you can fill out paperwork (or turn it in if forms are available online ahead of time) and give the staff time to set you up. Have your driver's license and insurance card ready when you check in at the reception desk. 
        </p>
          <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;