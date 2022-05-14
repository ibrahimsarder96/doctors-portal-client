import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
  const startYear = 2021
  const currentYear = new Date().getFullYear()
  return (
    <footer style={{
      background: `url(${footer})`,
      backgroundSize: 'cover'
    }} className="p-10 ">
 <div className="footer text-accent w-full 2xl:max-w-screen-xl">
 <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Emergency Checkup</a>
    <a className="link link-hover">Monthly Checkup</a>
    <a className="link link-hover">Weekly Checkup</a>
    <a className="link link-hover">Deep Checkup</a>
  </div> 
  <div>
    <span className="footer-title">ORAL HEALTH</span> 
    <a className="link link-hover">Fluoride Treatment</a>
    <a className="link link-hover">Cavity Filling</a>
    <a className="link link-hover">Teath Whitening</a>
  </div> 
  <div>
    <span className="footer-title">OUR ADDRESS</span> 
    <a className="link link-hover">New York - 101010 Hudson</a>
    
  </div>
 </div>
 <div className='my-10 text-center'>
    <p className='text-accent'>Copyright © {currentYear} - All right reserved</p>
  </div>
</footer>
  );
};

export default Footer;