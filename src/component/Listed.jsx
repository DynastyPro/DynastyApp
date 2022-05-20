import React from 'react';
import group18 from '../Images/group18.svg';
import group17 from '../Images/group17.svg';
import group16 from '../Images/group16.svg';
import '../App.css';

function Listed() {
  return (
    <div className='listed'>
      <div className='banner2-item1'>
        <img src={group18} alt="" />
      </div>
      <div className='banner2-item2'>
        <img src={group16} alt="" />
      </div>
      <div className='banner2-item3'>
        <img src={group17} alt="" />
      </div>
      <div className='listed-text'>
        <h1>COLLECTION NAME</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur. </h3>
      </div>
      
    </div>
  );
}

export default Listed;
