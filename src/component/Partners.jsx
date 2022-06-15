import React from "react";
import '../styles/Partners.css'
import mintyplex from "../images/minty.png";
import near_logo_stack from "../images/near_logo_stack.svg";

function Partners() {
  return (
    <div className="partners">
      <div className="partners-text">
        <h1>Partners</h1>
      </div>
      <div className="partners-logo">
        <div>
          <img src={near_logo_stack} alt="" style={{width: "60px"}}/>
        </div>
        <div>
          <img src={mintyplex} alt="" />
        </div>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
}

export default Partners;
