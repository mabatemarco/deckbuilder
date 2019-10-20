import React from 'react';
import HealthImg from '../images/heart.png';

const Health = (props) => {
  return (
    <div className="health">
      <img src={HealthImg} alt="" />
      <progress id='healthBar' value={props.currentHealth} max={props.maxHealth}></progress>
      <p>{props.currentHealth}/{props.maxHealth}</p>
    </div>
  )
}

export default Health;