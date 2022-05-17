import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

// ai page teke backend data patanor por ta client side load hoi na kaj baki ache



const AvailableAppointment = ({date}) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, 'PP');
  const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () =>  fetch(`http://localhost:5000/available?date${formattedDate}`)
     .then(res => res.json())
     );
     if(isLoading){
       return <Loading></Loading>
     }
    //  useEffect( () => {
    //    fetch(`http://localhost:5000/available?date${formattedDate}`)
    //    .then(res => res.json())
    //    .then(data => setServices(data))
    //  },[formattedDate])
  return (
    <div className='my-28'>
      <h1 className='text-secondary  text-bold text-center text-xl my-24'>Available Services on  {format(date, 'PP')}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services?.map(service => <Service
          key={service._id}
          service={service}
          setTreatment={setTreatment}
          ></Service>)
        }
      </div>
    { treatment && <BookingModal 
    treatment={treatment}
    date={date}
    refetch={refetch}
    setTreatment={setTreatment}
    ></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;