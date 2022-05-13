import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';


const Services = () => {
  const services = [
    {
    _id: 1,
    name: 'Fluoride Treatment',
    description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish.",
    img: fluoride
    },
    {
    _id: 2,
    name: 'Cavity Filling',
    description: "Regular checkups can identify cavities and other dental conditions before they cause troubling symptoms and lead to more-serious problems. The sooner you seek care, the better your chances of reversing the earliest stages of tooth decay and preventing its progression. If a cavity is treated before it starts causing pain, you probably won't need extensive treatment.",
    img: cavity
    },
    {
    _id: 3,
    name: 'Teeth Whitening',
    description: 'Whiter, brighter teeth can make a big improvement in your appearance and your self-confidence. At 209 NYC Dental in Midtown East, our expert cosmetic dentists provide New York City patients with complete whitening treatments using the advanced Zoom whitening system for immediate results that are superior to over-the-counter products.',
    img: whitening
    }
  ]
  return (
    <div>
    <div className='text-center my-24'>
      <h1 className='text-primary uppercase text-xl font-bold '>OUR SERVICES</h1>
      <h2 className='text-accent font-normal text-3xl'>Services We Provide</h2>
    </div>
    <div className='grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3 '>
      {
        services.map(service => <Service 
          key={service._id} 
          service={service}
          ></Service>)
      }
    </div>
    </div>
  );
};

export default Services;