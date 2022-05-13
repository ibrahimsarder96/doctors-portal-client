import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Winson Herry',
      review: "We have had great experiences with Dr.Winson Herry and their entire staff. They make you feel at ease and therefore we don't dread going to the dentist",
      location: 'California',
      img: people1
    },
    {
      _id: 2,
      name: 'Winson Herry',
      review: "SIMPLY AMAZING. Each and everyone that I came into contact with made this experience a great one. I can't thank y'all enough!",
      location: 'California',
      img: people2
    },
    {
      _id: 3,
      name: 'Winson Herry',
      review: "I had a great experience yesterday at the Dental One Associate. Team was very friendly ,professional and knowledgeable .Thank you for your great service",
      location: 'California',
      img: people3
    },
  ]
  return (
    <section className='my-28'>
      <div className='flex justify-between'>
        <div>
          <h1 className="text-primary font-bold text-xl">Testimonial</h1>
          <h2 className='text-3xl text-accent'>What Our Patients Says</h2>
        </div>
        <div>
          <img className='w-24 lg:w-48' src={quote} alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          reviews.map(review => <Review
          key={review._id}
          review={review}
          ></Review>)
        }
      </div>
    </section>
  );
};

export default Testimonials;