import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Terms from './Terms';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Terms></Terms>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
     <Footer></Footer>
    </div>
  );
};

export default Home;