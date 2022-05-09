import React from 'react';
import image2 from '../images/image2.jpg';
import '../styles/Listing.css'
import {listData} from '../data'
import ListItem from './ListItem';


function RecentListing() {
    return ( 
        <div className='recentlisting'>
            <div className='recentlisting-header'>
                <p>Recent Listing</p>
                <div className='line'></div>
            </div>
            <div className='recentlisting-body'>
                {
                    listData.map(item => (
                        <ListItem item={item} key={item.id} />
                    ))
                }
                
               </div>
            <div><a href="#">See more...</a></div>
        </div>
     );
}

export default RecentListing;