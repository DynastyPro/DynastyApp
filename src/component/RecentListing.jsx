import React from "react";
import "../styles/Listing.css";
import { listData } from "../data";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

function RecentListing() {
  return (
    <div className="recentlisting">
      <div className="recentlisting-header">
        <p>Recent Listing</p>
        <div className="line"></div>
      </div>
      <div className="recentlisting-body">
        {listData.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </div>
      <div className="more-con">
        <div className="more">
        <Link to="/listing">See more</Link>
        </div>
      </div>
    </div>
  );
}

export default RecentListing;
