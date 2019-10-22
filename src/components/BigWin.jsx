import React from 'react'

const BigWin = (props) => {
  return(
  <div className="bigWin">
    <h1>You Won You Dumb Toad!</h1>
    <button onClick={props.newGame}>Play Again</button>
    </div>
  )
}

export default BigWin