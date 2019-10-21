import React from 'react';
import BlockImg from '../images/block.png'

const Block = (props) => {
  return (
    <div className="block">
      <img src={BlockImg} alt="" />
      <p>Block:{props.block}</p>
    </div>
  )
}

export default Block