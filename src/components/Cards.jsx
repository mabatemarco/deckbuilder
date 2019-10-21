import React from 'react';
import Card from './Card'


const Cards = (props) => {
  return (
    <div className={props.cardsClass}>
      <Card
        shuffledDeck={props.shuffledDeck[0]}
        playerAttack={props.playerAttack}
      />
      <Card
        shuffledDeck={props.shuffledDeck[1]}
        playerAttack={props.playerAttack}
      />
      <Card
        shuffledDeck={props.shuffledDeck[2]}
        playerAttack={props.playerAttack}
      />
      <Card
        shuffledDeck={props.shuffledDeck[3]}
        playerAttack={props.playerAttack}
      />
      <Card
        shuffledDeck={props.shuffledDeck[4]}
        playerAttack={props.playerAttack}
      />
    </div>
  )
}

export default Cards