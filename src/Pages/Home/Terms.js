import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Terms = () => {
  return (
<div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row xl:max-w-screen-2xl">
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl text-accent font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6 text-accent">In case you're looking for a good dentist in Chicago, Illinois, many people have experienced the services that they provide in terms of providing exceptional dental care at affordable price rates. In Chicago, Illinois, dentists provide complete oral care to their patients, which is designed to help in providing relief from pain and improve the overall health of the patient as well. If you are looking for a good dentist, then you should certainly consider visiting Chicago, Illinois where they are available in various locations. If you are looking for a suitable dentist in Chicago, then you should certainly visit their offices and find out whether they provide good dental care at affordable price rates.</p>
      <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Terms;