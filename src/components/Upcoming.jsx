import React from 'react';
import Attack from '../images/attack.png';
import Block from '../images/block.png';

const Upcoming = (props) => {
  return(
  <div className="upcoming">
    <div className="upcomingAttack">
      <img src={Attack} alt="" />
      <p>{props.upcomingAttack}</p>
    </div>
    <div className="upcomingBlock">
      <img src={Block} alt="" />
      <p>{props.upcomingBlock}</p>
    </div>
    </div>
  )
}

export default Upcoming;