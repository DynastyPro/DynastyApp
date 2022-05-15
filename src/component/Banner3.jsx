import React from 'react';
import '../Styles/Banner3.css'
import group6 from '../Images/group6.svg';
import group14 from '../Images/group14.svg';
import group15 from '../Images/group15.svg';

function Banner3() {
  return (
    <div className='banner3'>
      <div className='img1'>
        <img src={group6} alt="" />
      </div>
      <div className='img2'>
        <img src={group14} alt="" />
      </div>
      <div className='img3'>
        <img src={group15} alt="" />
      </div>
      <div className='text'>
        <h1>ABOUT-US</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur. </h3>
      </div>
    </div>
  );
}

export default Banner3;
