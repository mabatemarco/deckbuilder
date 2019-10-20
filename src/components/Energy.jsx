import React from 'react';
import EnergyImg from '../images/energy.png';

const Energy = (props) => {
  return (
    <div className="energy">
      <img src={EnergyImg} alt="" />
      <progress variant ='info' id='energyBar' value={props.currentEnergy} max={props.maxEnergy}></progress>
      <p>{props.currentEnergy}/{props.maxEnergy}</p>
    </div>
  )
}

export default Energy;