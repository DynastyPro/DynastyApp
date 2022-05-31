import React from "react";
import '../Styles/Partners.css'
import mintyplex from "../Images/minty.png";

function Partners() {
  return (
    <div className="partners">
      <div className="partners-text">
        <h1>Partners</h1>
      </div>
      <div className="partners-logo">
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

export default Partners;
