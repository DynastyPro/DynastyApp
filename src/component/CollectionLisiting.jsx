import React from 'react'
import ListPageItem from './ListPageItem'
import { listData } from "../data";
import '../Styles/CollectionListing.css'

function CollectionLisiting() {
  return (
    <div className='collection-con'>
         <div className="">
        {listData.map((item) => (
          <ListPageItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default CollectionLisiting