import React, { useState } from "react";
import dynastylogo from '../images/dynasty.svg';
import '../App.css';
import { XLg } from 'react-bootstrap-icons';
import { List } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';



function Navbar() {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className='navbar'>
      <button className='mobile-menu' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
              <XLg style={{ color:"#000", width: "40px", height: "40px" }} />
          ) : (
              <List style={{ color: "#000", width: "40px", height: "40px" }} />
          )}
      </button>
      <div className='nav-item'>
          <img src={dynastylogo} alt="" />
          <nav className={isMobile ? "navMenu-mobile" : "navMenu" } onClick={() => setIsMobile(false)} >
            <li><a href="#">Listing</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li id='register'><a href="#">Register</a></li>
          </nav>
      </div>
    </div>
  );
}

export default Navbar;
