import React from 'react';
import Energy from '../images/energy.png';
import Block from '../images/block.png';
import Attack from '../images/attack.png';
import Heart from '../images/heart.png';


const WinScreen = (props) => {
  return (
    <div className="winScreen">
      <h1>You Won</h1>
      <h2>Select 2 cards to add to your deck</h2>
      <div className="upgrades">
        {props.upgrades.map(card => (

          <div className="card" onClick={() => props.addCard(card.index)} key={card.index}>

            <div className="cardHeader">
              <h2>{card.name}</h2>
              
            </div>

            <img src={card.img} alt="" />
            <div className="info">
              {card.attack !== 0 && <p><img className="icon" src={Attack} alt="" /> {card.attack}</p>
              }

              {card.block !== 0 && <p><img className="icon" src={Block} alt="" /> {card.block}</p>}

              {card.heal !== 0 && <p><img className="icon" src={Heart} alt="" /> {card.heal}</p>
              }
              <h3 id="energyIcon"><img src={Energy} className="icon" alt="" />{card.cost}</h3>
            </div>
          </div >

        ))}
      </div>
      <button onClick={props.nextRound}>Next Round</button>
    </div>
  )
}

export default WinScreen