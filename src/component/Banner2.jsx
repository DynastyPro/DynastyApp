import React from 'react';
import group6 from '../images/group6.svg';
import group14 from '../images/group14.svg';
import group15 from '../images/group15.svg';
import '../styles/Banner2.css';

function Banner2() {
  return (
    <div className='banner2'>
      <div className='banner2-img'>
        <img src={group6} alt="" />
      </div>
      <div className='banner2-img1'>
        <img src={group14} alt="" />
      </div>
      <div className='banner2-img2'>
        <img src={group15} alt="" />
      </div>
      <div className='banner2-text'>
        <h1>NFT LISTING</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
      </div>
    </div>
  );
}

export default Banner2;
