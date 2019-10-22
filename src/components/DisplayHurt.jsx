import React from 'react'
import Heart from '../images/heart.png'


const DisplayHurt = (props) => {
  return (
    <div className="displayHurt">
      <img src={Heart} alt="" />
      <h2>{props.hurt}</h2>
    </div>
  )
}

export default DisplayHurt