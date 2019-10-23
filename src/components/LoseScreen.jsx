import React from 'react'
import Loser from '../images/characterlose.jpg'

const LoseScreen = (props) => {
  return(
  <div className="loseScreen">
      <h1>You Lost!</h1>
      <img src={Loser} alt=""/>
    <button onClick={props.newGame}>Try Again</button>
    </div>
  )
}

export default LoseScreen