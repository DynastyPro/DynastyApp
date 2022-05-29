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
        <h2>List, Find, and Curate NFTs easily.</h2>
        <h3>
        <b>DynastyPad</b> is a Mintyplex-powered aggregator platform that allows creators to list their <b>NEAR</b> NFT Collections and helps collectors easily find and curate NFT collectibles.
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
