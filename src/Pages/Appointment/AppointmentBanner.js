import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div style={{
      background: `url(${bg})`,
      backgroundSize: 'cover'
    }} className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse xl:max-w-screen-2xl ">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=""/>
    <div className='text-accent pr-24'>
    <DayPicker 
    mode="single"
    selected={date}
    onSelect={setDate}
    />
    <p>You have Selected: {format(date, 'PP')}</p>
    </div>
  </div>
</div>
  );
};

export default AppointmentBanner;