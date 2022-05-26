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
      
      <div className='about-text'>
        <div className='about-text-content'>
         
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque.  
          
        </div>

        <div className='about-text-content'>
        
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque.  
          
        </div>
      </div>

      <div className='about-contact'>
       
          <h1>Contact Us</h1>
          <div className='textin'>
            <div className='launch'>Got an idea you need a  <br/> launchpad for?</div>
            <div  className='launch'><a href='https://airtable.com/shrGd0Jj6MM6ya2mL' className='learn' target="blank">Get Listed</a></div>
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
