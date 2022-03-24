import React from 'react';
import dynastylogo from '../dynasty.svg';
import '../App.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-item'>
          <img src={dynastylogo} alt="" />
          <nav className="navMenu">
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
