import React from 'react';
import Character from './Character';
import Health from './Health';
import Block from './Block';
import Upcoming from './Upcoming'
import DisplayBlocked from'./DisplayBlocked'
import DisplayHurt from'./DisplayHurt'
import Explosion from '../images/explosion.png'




const Hero = (props) => {
  return (
    <div className="enemy">

      <Upcoming
        upcomingAttack={props.upcomingAttack}
        upcomingBlock={props.upcomingBlock}
      />
      {props.hurt > 0 && <DisplayHurt hurt={props.hurt} />}
      {props.blocked > 0 && <DisplayBlocked blocked={props.blocked}/>}
      <Character
        img={props.enemyImg}
        class={props.class}
      />
      {props.class === 'hurt' && <img className="explosion" src={Explosion} alt="" />}      <Health
        maxHealth={props.maxHealth}
        currentHealth={props.currentHealth}
      />
      {props.block !== 0 && <Block block={props.block} />}
    </div>
  )
}

export default Hero;