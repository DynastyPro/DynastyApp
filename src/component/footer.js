import React from 'react';
import '../App.css';
import group4 from '../images/group4.svg';
import socials from '../images/socials.svg';

function Footer() {
  return (
    <div className='footer'>
        <img src={group4} alt="" className='group4' />
        <div className='footer-widget'>
            <div className='span'>
                <span>Subscribe to our newsletter</span>
            </div>
            <div className='img'>
                <img src={socials} alt="" />
            </div>
            <div className='h5'>
                <h5>Copyright - 2022 DynastyPro</h5>
            </div>
        </div>
        <div className='footer-widget-right'>
            <form onSubmit={onclick}>
                <input type="text" placeholder="Email address" />
                <button type="submit">></button>
            </form>
        </div>
    </div>
  );
}

export default Footer;
