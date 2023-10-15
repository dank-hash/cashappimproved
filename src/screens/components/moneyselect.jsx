import React from 'react'
import './moneyselect.css'


function MoneySelector(props) {
  return (
    <div onClick={props.onclick} className='card-money'><p style={{paddingTop:"20px", fontWeight:"600"}}>{props.text}</p></div>
  )
}

export default MoneySelector