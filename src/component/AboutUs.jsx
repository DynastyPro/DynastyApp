import React from 'react';
import '../Styles/AboutUs.css'
import image3 from '../Images/image3.png';
import {Link} from 'react-router-dom'
import {FaDiscord} from 'react-icons/fa'
import {FiGlobe, FiTwitter} from 'react-icons/fi'

function AboutUs() {
  return (
    <div className='aboutus'>
      <div className='ban'>
        <img src={image3} alt="" className='ban-img' sizes='(max-width:300px) 200px'/>
      </div>
      
      <div className='about-text about-text-1'>
        <div className='about-text-content'>
         
        <b>DynastyPad</b> is an NFT aggregator and curating platform that allows creators to list their NFT collections and reach collectors finding curated NFT projects to invest in or support.<br/> Being powered by Mintyplex and in harmony with Mintyplex's goal, DynastyPad aims to onboard and connect as many creators and collectors as possible into the NEAR ecosystem. <br/><b>Our mission</b> is to make the listing, finding, and curating of NEAR NFTs as simple as possible. This current interface is the pre-alpha version. The team is actively building and will be launching the beta version soon.
          
        </div>
{/* 
        <div className='about-text-content'>
        
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque.  
          
        </div> */}
      </div>

      <div className='about-contact'>
       
          <h1>Contact Us</h1>
          <div className='textin'>
            <div className='launch'>Got an idea you need a  <br/> launchpad for?</div>
            <div  className='launch'><a href='https://airtable.com/shrGd0Jj6MM6ya2mL' id='register' target="blank">Get Listed</a></div>
          </div>
        
      </div>
      {/* <div className="social">
              <FaDiscord className="icon"/>
              <FiGlobe className="icon"/>
              <FiTwitter className="icon"/>
      </div> */}
      
    </div>
  );
}

export default AboutUs;
