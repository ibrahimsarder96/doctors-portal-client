import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from'@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51L1DfkJEK7zr13jHy0Xz1Iazbk2wOr90vfCoLwQ8kxk8h8MAbl7NzgWiSA97OkAgQpWuTZ31hQKQJUImhdznqCVR00yhX3dS1R');

const Payment = () => {
  const {id} = useParams();
  const url = `http://localhost:5000/booking/${id}`
  const {data: appointment, isLoading} = useQuery(['booking', id], () => fetch(url,{
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res=>res.json()))

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className="text-2xl text-purple-400">please pay for: {id}</h2>
      <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left shadow-2xl rounded-xl">
     <div className="card-body shadow-2xl rounded-xl">
     <h1 class="text-4xl font-bold text-success">{appointment.patientName}</h1>
      <p class="py-3 text-2xl text-accent">{appointment.treatment}</p>
      <p class="py-3 text-2xl text-accent">Your appointment: <spa>{appointment.date}</spa> at {appointment.slot}</p>
      <p class="py-3 text-2xl text-accent">Please pay: ${appointment.price}</p>
     </div>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body shadow-2xl">
      <Elements stripe={stripePromise}>
      <CheckoutForm appointment={appointment}/>
    </Elements>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Payment;