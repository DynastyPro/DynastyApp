import React from 'react';
import group6 from '../images/group6.svg';
import group14 from '../images/group14.svg';
import group15 from '../images/group15.svg';
import '../App.css';

function Banner3() {
  return (
    <div className='banner banner2'>
      <div className='banner2-item1'>
        <img src={group6} alt="" />
      </div>
      <div className='banner2-item2'>
        <img src={group14} alt="" />
      </div>
      <div className='banner2-item3'>
        <img src={group15} alt="" />
      </div>
      <div className='banner2-text'>
        <h1>ABOUT-US</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur. </h3>
      </div>
    </div>
  );
}

export default Banner3;
