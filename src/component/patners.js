import React from "react";
import '../styles/Partners.css'
import mintyplex from "../images/minty.png";

function Patners() {
  return (
    <div className="patners">
      <div className="patners-text">
        <h1>Patners</h1>
      </div>
      <div className="patners-logo">
        <div>
          <img src={mintyplex} alt="" />
        </div>
        <div>
        <img src={mintyplex} alt="" />
        </div>
        <div>
        <img src={mintyplex} alt="" />
        </div>
        <div>
        <img src={mintyplex} alt="" />
        </div>
       <div>
       <img src={mintyplex} alt="" />
       </div>
     <div>
     <img src={mintyplex} alt="" />
     </div>
      </div>
    </div>
  );
}

export default Patners;
