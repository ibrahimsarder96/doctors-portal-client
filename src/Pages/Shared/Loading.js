import React from 'react';
import {  SpinnerCircularSplit } from 'spinners-react';

const Loading = () => {
  return (
    <div className='flex  h-screen justify-center items-center'>
      <SpinnerCircularSplit  size={90} thickness={100} speed={100} color="rgba(172, 57, 97, 1)" secondaryColor="rgba(94, 172, 57, 0.44)"  />
      
    </div>
  );
};

export default Loading;