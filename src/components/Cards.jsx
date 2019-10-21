import React from 'react';
import Card from './Card'


const Cards = (props) => {
  return (
    <div className="cards">
      <Card
        shuffledDeck={props.shuffledDeck[0]}
        discardDeck={props.discardDeck[0]}
        playerAttack={props.playerAttack}
      />
      <Card
        shuffledDeck={props.shuffledDeck[1]}
        discardDeck={props.discardDeck[1]}
        playerAttack={props.playerAttack}
      />
      <Card
        shuffledDeck={props.shuffledDeck[2]}
        discardDeck={props.discardDeck[2]}
        playerAttack={props.playerAttack}
      />
      <Card
        shuffledDeck={props.shuffledDeck[3]}
        discardDeck={props.discardDeck[3]}
        playerAttack={props.playerAttack}
      />
      <Card
        shuffledDeck={props.shuffledDeck[4]}
        discardDeck={props.discardDeck[4]}
        playerAttack={props.playerAttack}
      />
    </div>
  )
}

export default Cards