import React from 'react';
import '../App.css';
import image3 from '../images/image3.png';
import socials from '../images/socials.svg';

function AboutUs() {
  return (
    <div className='about-us'>
      <div className=''>
        <img src={image3} alt="" className='group8' />
      </div>
      
      <div className='about-text'>
        <div className='about-text-content'>
          <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque.  
          </h1>
        </div>

        <div className='about-text-content'>
          <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque.  
          </h1>
        </div>
      </div>

      <div className='about-contact'>
        <div>
          <h1>Contact Us</h1>
          <div className='textin'>
            <h2 className='we'>Got an idea you need a launchpad for?</h2>
            <div id='register' className='we'><a href="#">Learn more...</a></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AboutUs;
