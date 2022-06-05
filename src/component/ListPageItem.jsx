import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ListPageItem.css";
import image1 from "../Images/image1.jpg";
import group24 from "../Images/group24.svg";

function ListPageItem({ item }) {
  return (
    <div className="listpageitem">
      <div className="list-image">
        <div className='cover'>{item.background}</div>
      </div>
      <div className="list-content">
        <div className="item-name">{item.name}</div>
        <h1 className="item-content">{item.content}</h1>
        <h2 className="item-content">{item.link}</h2>
        {/* <div className="link">
          <Link to="/ListedCollection" id='register'>Learn more</Link>
        </div> */}
      </div>
    </div>
  );
}

export default ListPageItem;
