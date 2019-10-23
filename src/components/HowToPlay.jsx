import React from 'react'
import SS1 from '../images/ss1.png'
import SS2 from '../images/ss2.png'
import SS3 from '../images/ss3.png'

const HowToPlay = () => {
  return (
    <div className="howTo">
      <div className="instruction">
        <div className="topic">
          <h1>Combat</h1>
          <p>You begin the game with 7 action cards, and can choose from 5 each turn.  Some will attack, some will add defense against your opponent, and some will heal you.  Play cards each turn until your energy is depleted, then brace for your opponent's turn.  Your energy will be restored to full on your next turn, and your defense will reset.</p>
        </div>
        <img id ="combat" src={SS1} alt=""/>
      </div>
      <div className="instruction">
        <div className="topic">
          <h1>Strategy</h1>
          <p>During your turn, your opponent's next move will be displayed above its head.  You can see how much your opponent will attack for on its next turn and how much defense it will add to itself (Its current defense for this turn is displayed beneath the opponent's health bar).  Plan accordingly to ensure that you aren't critically damaged.  Know when to strike and when to defend.</p>
        </div>
        <img src={SS2} alt=""/>
      </div>
      <div className="instruction">
        <div className="topic">
          <h1>Building Your Deck</h1>
          <p>When you defeat your opponent, you will be rewarded with more powerful new cards to add to your deck.  You can select two of three offerings each turn.  You will need them to face the increasingly strong enemies along your path.</p>
        </div>
        <img src={SS3} alt=""/>
      </div>
    </div>
  )
}

export default HowToPlay