import React from "react";
import "../Styles/About.css";
import group7 from "../Images/group7.svg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="content">
        {/* <img src={group8} alt="" className='group8' /> */}
        <div className="about-header">
          <h6>
            About Us
          </h6>
          <span>
            DynastyPad helps you list, find and curate NEAR NFT Collections easily.
          </span>
          <div className="learn">
            <Link to="/about" id="register">Learn more</Link>
          </div>
        </div>
        <div className="about-content">
          <img src={group7} alt="" />
          <div className="about-text">
            <h4>
            DynastyPad is an NFT aggregator and curating platform that allows creators to list their NFT collections and reach collectors finding curated NFT projects to invest in or support.<br/> Being powered by Mintyplex and in harmony with Mintyplex's goal, DynastyPad aims to onboard and connect as many creators and collectors as possible into the NEAR ecosystem. <br/>Our mission is to make the listing, finding, and curating of NEAR NFTs as simple as possible. This current interface is the pre-alpha version. The team is actively building and will be launching the beta version soon.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
