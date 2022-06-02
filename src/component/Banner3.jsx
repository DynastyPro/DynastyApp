import React from 'react';
import group6 from '../Images/group6.svg';
import group14 from '../Images/group14.svg';
import group15 from '../Images/group15.svg';
import '../Styles/Banner2.css';

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
        <h1>ABOUT-US</h1>
        <h3>DynastyPad helps you list, find and curate NEAR NFT Collections easily.</h3>
      </div>
    </div>
  );
}

export default Banner2;
