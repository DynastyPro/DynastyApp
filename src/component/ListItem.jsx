import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ListItem.css'
import group24 from '../Images/group24.svg';

function ListItem({item}) {
  return (
    <div className='per-list'>
      <div className='cover'>{item.background}</div>
      <div>{item.name}</div>
      <h1>{item.content}</h1>
      <h2>{item.link}</h2>  
      {/* <img src={group24} alt="" className='star'/> */}
      {/* <div><Link to='/ListedCollection' id='register'>Learn more</Link></div> */}
    </div>
  )
}

export default ListItem