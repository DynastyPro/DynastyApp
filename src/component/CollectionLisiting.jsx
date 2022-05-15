import React from 'react'
import ListPageItem from './ListPageItem'

function CollectionLisiting() {
  return (
    <div>
         <div className="recentlisting-body">
        {listData.map((item) => (
          <ListPageItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default CollectionLisiting