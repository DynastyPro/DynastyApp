import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ListItem.css'
import group24 from '../Images/group24.svg';
import image1 from '../Images/image1.jpg';


function ListItem({item}) {
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

export default ListItem