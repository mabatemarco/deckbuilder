import React from 'react';
import Character from './Character';
import Health from './Health';
import Energy from './Energy';



const Hero = (props) => {
  return (
    <div className="enemy">
      <Character img={props.enemyImg} />
      <Health
        maxHealth={props.maxHealth}
        currentHealth={props.currentHealth}
      />
      <Energy
        maxEnergy={props.maxEnergy}
        currentEnergy={props.currentEnergy}
      />
    </div>
  )
}

export default Hero;