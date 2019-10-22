import React from 'react';
import Character from './Character';
import Health from './Health';
import Energy from './Energy';
import Block from './Block'
import DisplayBlocked from'./DisplayBlocked'
import DisplayHurt from'./DisplayHurt'
import Explosion from '../images/explosion.png'




const Hero = (props) => {
  return (
    <div className="hero">
      
      {props.hurt > 0 && <DisplayHurt hurt={props.hurt} />}
      {props.blocked > 0 && <DisplayBlocked blocked={props.blocked}/>}

      <Character
        img={props.heroImg}
        class={props.class}  
      />
      {props.class==='hurt' && <img className="explosion" src={Explosion} alt="" />}
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