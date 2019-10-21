import React from 'react';
import Character from './Character';
import Health from './Health';
import Energy from './Energy';
import Block from './Block';
import Upcoming from './Upcoming'



const Hero = (props) => {
  return (
    <div className="enemy">
      
      <Upcoming
        upcomingAttack={props.upcomingAttack}
        upcomingBlock={props.upcomingBlock}
      />
      <Character img={props.enemyImg} />
      <Health
        maxHealth={props.maxHealth}
        currentHealth={props.currentHealth}
      />
      <Energy
        maxEnergy={props.maxEnergy}
        currentEnergy={props.currentEnergy}
      />
      {props.block !== 0 && <Block block={props.block} />}
    </div>
  )
}

export default Hero;