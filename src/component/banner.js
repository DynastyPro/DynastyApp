import React from 'react';
import group5 from '../group5.svg';
import group6 from '../group6.svg';
import '../App.css';

function Banner() {
  return (
    <div className='banner'>
      <div className='banner-item'>
        <img src={group5} alt="" />
      </div>
      <div className='banner-item1'>
        <img src={group6} alt="" />
      </div>
      <div className='banner-text'>
        <h1>DYNASTYDAO</h1>
        <h2>THE PRO AGGREGATOR</h2>
        <h3>We are an aggregator that aims to help new <b>NEAR</b> launched projects create high quality experiences for their communities. Check out our approved and vetted their collection and project are!</h3>
      </div>
      <div id='register'><a href="#">Register</a></div>
    </div>
  );
}

export default Banner;
