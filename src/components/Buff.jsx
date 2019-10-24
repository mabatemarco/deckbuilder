import React from 'react'
import BuffImg from '../images/buffIcon.png'

const Buff = (props) => {
  return (
  <div className="buffIcon">
      <img src={BuffImg} alt="" /><p>{props.buff}</p>
    </div>
  )
}

export default Buff