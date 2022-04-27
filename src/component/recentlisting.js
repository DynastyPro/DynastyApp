import React from 'react';
import '../App.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import group24 from '../images/group24.svg';


function RecentListing() {
    return ( 
        <div className='recentlisting'>
            <div className='recentlisting-header'>
                Recent Listing
                {/* <div className='line'></div> */}
            </div>
            <div className='recentlisting-body'>
                <div className='per-list'>
                    <img src={image1} alt="" />
                    <span>Collection Name</span>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis erat elementum mauris egestas risus justo pulvinar morbi integer. Condimentum ipsum ac ullamcorper.</h1>
                    <img src={group24} alt="" className='star' />
                    <div id='register'><a href="#">Learn more...</a></div>
                </div>
                <div className='per-list'>
                    <img src={image2} alt="" />
                    <span>Collection Name</span>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis erat elementum mauris egestas risus justo pulvinar morbi integer. Condimentum ipsum ac ullamcorper.</h1>
                    <img src={group24} alt="" className='star' />
                    <div id='register'><a href="#">Learn more...</a></div>
                </div>
                <div className='per-list'>
                    <img src={image1} alt="" />
                    <span>Collection Name</span>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis erat elementum mauris egestas risus justo pulvinar morbi integer. Condimentum ipsum ac ullamcorper.</h1>
                    <img src={group24} alt="" className='star' />
                    <div id='register'><a href="#">Learn more...</a></div>
                </div>
            </div>
            <div className='register' id='register'><a href="#">See more...</a></div>
        </div>
     );
}

export default RecentListing;