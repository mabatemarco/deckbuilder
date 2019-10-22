import React from 'react'

const LoseScreen = (props) => {
  return(
  <div className="loseScreen">
    <h1>You Lost You Dumb Toad!</h1>
    <button onClick={props.lostGame}>Try Again</button>
    </div>
  )
}

export default LoseScreen