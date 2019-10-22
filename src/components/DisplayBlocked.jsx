import React from 'react'
import BlockImg from '../images/block.png'


const DisplayBlocked = (props) => {
  return (
    <div className="displayBlocked">
      <img src={BlockImg} alt="" />
      <h2>{props.blocked}</h2>
    </div>
  )
}

export default DisplayBlocked