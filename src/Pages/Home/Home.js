import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Terms from './Terms';

const Home = () => {
  return (
    <div className='px-12'>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Terms></Terms>
    </div>
  );
};

export default Home;