import React, { useState } from "react";
import dynastylogo from "../images/dynasty.svg";
import "../styles/Navbar.css";

import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
      <div className="mobile-con">
        <Link to='/'><img src={dynastylogo} alt="" /></Link>
        <div className="menu-icon"onClick={handleClick}>
          {click? <FaTimes/> : <FaBars/>}
        </div>

      </div>
      <nav className={`${click? 'active' : null}`}>
        <div className="nav-links">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-links">
          <Link to="/listing">Listing</Link>
        </div>
        <div className="nav-links">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-links">
          <Link to="/contact">Contact</Link>
        </div>
        <button id="register">
          <Link to="/register">Register</Link>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;

