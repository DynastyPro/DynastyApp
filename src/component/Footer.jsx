import React from "react";
import "../Styles/Footer.css";
import group4 from "../Images/group4.svg";
import {FaDiscord} from 'react-icons/fa'
import {BiCopyright} from 'react-icons/bi'
import {BsChevronRight} from 'react-icons/bs'
import {FiGlobe, FiTwitter} from 'react-icons/fi'


function Footer() {
  return (
    <div className="footer">
      <div className="footer-widget">
        <div widget-className="widget-2">
          {" "}
          <div><img src={group4} alt="" className="group4" /></div>
          <div className="social">
              <FaDiscord className="icon"/>
              <FiGlobe className="icon"/>
              <FiTwitter className="icon"/>
          </div>
        </div>
        <div className="widget-1">
          
          <div className="span">
            <span>Subscribe to our <br/> newsletter</span>
          </div>
          <div className="footer-widget-right">
            <form onSubmit={onclick}>
              <input type="text" placeholder="Email address" />
              <button type="submit" className="submit"><BsChevronRight/></button>
            </form>
          </div> <div className="h5">
        </div>         
        </div>
      </div>
      <div className="copyright">
        <h5><BiCopyright className="icon"/>Copyright - 2022 DynastyPad</h5>
      </div>
    </div>
  );
}

export default Footer;
