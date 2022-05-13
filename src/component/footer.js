import React from "react";
import "../styles/Footer.css";
import group4 from "../images/group4.svg";
import {FaDiscord} from 'react-icons/fa'
import {BiCopyright} from 'react-icons/bi'
import {FiGlobe, FiTwitter} from 'react-icons/fi'


function Footer() {
  return (
    <div className="footer">
      <div className="footer-widget">
        <div>
          {" "}
          <img src={group4} alt="" className="group4" />
        </div>
        <div>
          <div className="span">
            <span>Subscribe to our <br/> newsletter</span>
          </div>
          <div className="social">
              <FaDiscord className="icon"/>
              <FiGlobe className="icon"/>
              <FiTwitter className="icon"/>
          </div>
          <div className="h5">
            <h5><BiCopyright className="icon"/>Copyright - 2022 DynastyPro</h5>
          </div>
        </div>
        <div className="footer-widget-right">
          <form onSubmit={onclick}>
            <input type="text" placeholder="Email address" />
            <button type="submit">sub</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
