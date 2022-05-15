import React from "react";
import "../styles/About.css";
import group7 from "../images/group7.svg";
import group8 from "../images/group8.svg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="content">
        {/* <img src={group8} alt="" className='group8' /> */}
        <div className="about-header">
          <h6>
            About <br /> Us
          </h6>
          <span>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.{" "}
          </span>
          <div className="learn">
            <Link to="/">Learn more...</Link>
          </div>
        </div>
        <div className="about-content">
          <img src={group7} alt="" />
          <div className="about-text">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus.
              Tristique urna faucibus et adipiscing sollicitudin. Varius vitae
              imperdiet donec nulla auctor eleifend dis commodo pellentesque.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus.
              Tristique urna faucibus et adipiscing sollicitudin. Varius vitae
              imperdiet donec nulla auctor eleifend dis commodo pellentesque.{" "}
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus.
              Tristique urna faucibus et adipiscing sollicitudin. Varius vitae
              imperdiet donec nulla auctor eleifend dis commodo pellentesque.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus.
              Tristique urna faucibus et adipiscing sollicitudin. Varius vitae
              imperdiet donec nulla auctor eleifend dis commodo pellentesque.{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
