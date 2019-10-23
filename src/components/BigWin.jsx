import React from 'react'
import Winner from '../images/characterwin.jpg'

const BigWin = (props) => {
  return(
  <div className="bigWin">
      <h1>You Did It!</h1>
      <img src={props.gif} alt=""/>
    <button onClick={props.newGame}>Play Again</button>
    </div>
  )
}

export default BigWin