import React from "react";
import group5 from "../Images/group5.svg";
import group6 from "../Images/group6.svg";
import "../Styles/Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className='banner-item'>
        <img src={group6} alt="" />
      </div>

      <div className="banner-text">
        <h1>DYNASTYPAD</h1>
        <h2>THE PRO AGGREGATOR</h2>
        <h3>
          We are an aggregator that aims to help new <b>NEAR</b> <br/> launched
          projects create high quality experiences for <br/> their communities. Check
          out our approved and vetted <br/> their collection and project are!
        </h3>
        <div className="register">
          <a href='https://airtable.com/shrGd0Jj6MM6ya2mL' target="blank">Get Listed</a>
        </div>
      </div>
      <div className="banner-image">
        <img src={group5} alt="" />
      </div>
    </div>
  );
}

export default Banner;
