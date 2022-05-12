import React from 'react';
import '../styles/Service.css'

function Ourservice() {
  return (
    <div className='service'>
        {/* <img src={group9} alt="" className='group9' /> */}
        <div className='service-header'>
            <h6>Our <br/> Service</h6>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        </div>
        <div className='service-content'>
            <div className='service-text'>
                <div className='ellipse'></div>
                <h1>Lorem ipsum dolor </h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem tempus sit massa ridiculus eget dignissim id consequat.</span>
            </div>
            <div className='service-text'>
                <div className='ellipse'></div>
                <h1>Lorem ipsum dolor </h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem tempus sit massa ridiculus eget dignissim id consequat.</span>
            </div>
            <div className='service-text'>
                <div className='ellipse'></div>
                <h1>Lorem ipsum dolor </h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem tempus sit massa ridiculus eget dignissim id consequat.</span>
            </div>
        </div>
    </div>
  );
}

export default Ourservice;
