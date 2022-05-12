import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ListItem.css'
import group24 from '../images/group24.svg';
import image1 from '../images/image1.jpg';


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