import React from 'react'
import '../styles/ListPageItem.css'


function ListPageItem() {
  return (
    <div className='per-list'>
    <img src={image1} alt=""  className='cover'/>
    <div>{item.name}</div>
    <h1>{item.content}</h1>
    <img src={group24} alt="" className='star'/>
    <div><Link to='/'>Learn more...</Link></div>
</div>
  )
}

export default ListPageItem