import React from 'react';
import '../Styles/Service.css'
import {IoListSharp} from 'react-icons/io5'
import {BsBarChart} from 'react-icons/bs'
import {FiBox} from 'react-icons/fi'

function Ourservice() {
  return (
    <div className='service'>
        
        <div className='service-header'>
            <h6>Our Service</h6>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        </div>
        <div className='service-content'>
            <div className='service-text'>
                <div className='ellipse'><IoListSharp className='icon'/></div>
                <h1>Lorem ipsum dolor </h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem tempus sit massa ridiculus eget dignissim id consequat.</span>
            </div>
            <div className  ='service-text'>
                <div className='ellipse'><BsBarChart className='icon'/></div>
                <h1>Lorem ipsum dolor </h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem tempus sit massa ridiculus eget dignissim id consequat.</span>
            </div>
            <div className='service-text'>
                <div className='ellipse'><FiBox className='icon'/></div>
                <h1>Lorem ipsum dolor </h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem tempus sit massa ridiculus eget dignissim id consequat.</span>
            </div>
        </div>
    </div>
  );
}

export default Ourservice;
