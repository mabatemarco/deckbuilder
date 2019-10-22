import React from 'react';
import Card from './Card'


const Cards = (props) => {
  return (
    <div className='cards'>
      {props.shuffledDeck.filter((card, index) => index < 5).map((card, index) => (
        <React.Fragment key={index}>
          {card.showing&&
            <Card
              shuffledDeck={card}
              playerAttack={props.playerAttack}
              index={index}
            />
          }
        </React.Fragment>
      ))}

    </div>
  )
}

export default Cards