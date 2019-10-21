import React from 'react';
import Character from './Character';
import Health from './Health';
import Energy from './Energy';
import Block from './Block'



const Hero = (props) => {
  return (
    <div className="enemy">
      {props.block !== 0 && <Block block={props.block} />}
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