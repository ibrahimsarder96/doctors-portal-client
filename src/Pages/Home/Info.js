import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import CardInfo from './CardInfo';

const Info = () => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
      <CardInfo cardTitle="Opening Hours" bgclass="bg-gradient-to-r from-secondary to-primary" info="8:00 am - 8:00 pm" img={clock}></CardInfo>
      <CardInfo cardTitle="Visit our location" bgclass="bg-accent" info="New York,NY,100016,U.S.A" img={marker}></CardInfo>
      <CardInfo cardTitle="Contact us now" bgclass="bg-gradient-to-r from-secondary to-primary" info="phone: 646-858-0219" img={phone}></CardInfo>
    </div>
  );
};

export default Info;