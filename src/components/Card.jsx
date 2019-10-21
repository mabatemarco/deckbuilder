import React from 'react';
import Energy from '../images/energy.png';
import Block from '../images/block.png';
import Attack from '../images/attack.png';

const Card = (props) => {
  return (
    <div className="card"
      onClick={(e) => { props.playerAttack(e, props.index) }}
      data-attack={props.shuffledDeck.attack}
      data-block={props.shuffledDeck.block}
      data-energy={props.shuffledDeck.cost}
    >

      <div className="cardHeader">
        <h2>{props.shuffledDeck.name}</h2>
        <h3><img src={Energy} alt="" />{props.shuffledDeck.cost}</h3>
      </div>

      <img src={props.shuffledDeck.img} alt="" />
      <div className="info">
        {props.shuffledDeck.attack !== 0 && <p><img className="icon" src={Attack} alt="" /> {props.shuffledDeck.attack}</p>
        }

        {props.shuffledDeck.block !== 0 && <p><img className="icon" src={Block} alt="" /> {props.shuffledDeck.block}</p>}
      </div>

    </div >
  )
}


export default Card