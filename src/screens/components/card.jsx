import React from 'react'
import './card.css'


function Card(props) {
  return (
    <div className='card'><img className='image' src={props.image} /></div>
  )
}

export default Card