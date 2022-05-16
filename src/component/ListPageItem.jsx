import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ListPageItem.css";
import image1 from "../Images/image1.jpg";
import group24 from "../Images/group24.svg";

function ListPageItem({ item }) {
  return (
    <div className="listpageitem">
      <div className="list-image">
        <img src={image1} alt="" className="" />
      </div>
      <div className="list-content">
        <div className="item-name">{item.name}</div>
        <h1 className="item-content">{item.content}</h1>
        <div className="link">
          <Link to="/">See more</Link>
        </div>
      </div>
    </div>
  );
}

export default ListPageItem;
