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
            <span>We are committed to building an NFT platform that helps you list, find and curate NEAR NFTs. Below are a few of the services we offer: </span>
        </div>
        <div className='service-content'>
            <div className='service-text'>
                <div className='ellipse'><IoListSharp className='icon'/></div>
                {/* <h1>Lorem ipsum dolor </h1> */}
                <span>We allow Creators to list their Upcoming or launched NFT projects effortlessly.</span>
            </div>
            <div className  ='service-text'>
                <div className='ellipse'><BsBarChart className='icon'/></div>
                {/* <h1>Lorem ipsum dolor </h1> */}
                <span>We pull NFT data from different vital sources so that collectors can get the most relevant details about collections.</span>
            </div>
            <div className='service-text'>
                <div className='ellipse'><FiBox className='icon'/></div>
                {/* <h1>Lorem ipsum dolor </h1> */}
                <span>We offer a gamified experience to make it more fun for collectors to curate and engage with Listed Collections.</span>
            </div>
        </div>
    </div>
  );
}

export default Ourservice;
