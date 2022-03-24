import React from 'react';
import '../App.css';
import mintyplex from '../mintyplex.svg';

function Patners() {
  return (
    <div className='patners'>
        <div className='patners-text'>
            <h1>Patners</h1>
        </div>
        <div className='patners-logo'>
            <img src={mintyplex} alt="" width={100} />
            <img src={mintyplex} alt="" width={100} />
            <img src={mintyplex} alt="" width={100} />
            <img src={mintyplex} alt="" width={100} />
            <img src={mintyplex} alt="" width={100} />
            <img src={mintyplex} alt="" width={100} />
        </div>
    </div>
  );
}

export default Patners;
