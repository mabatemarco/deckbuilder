import React from 'react'
import { Link } from 'react-router-dom';
import Title from '../images/title.png'

const Home = () => {
  return (
    <div className="home">
      <img src={Title} alt="" />
      <div className="about">
        <h1>deckbuilder</h1>
        <p>Choose your cards wisely! Discover hundreds of cards to add to your deck with each attempt at climbing the Spire. Select cards that work together to efficiently dispatch foes and reach the top. <br /><br />
        This is the description to <strong>Slay the Spire</strong>, the tremendously fun and successful game that <strong>Deckbuilder</strong> is a pale and shameless imitation of!  Also I stole all of the characters and setting from <strong>Dead Cells</strong></p>
        <Link to='play'><button>Play Game</button></Link>
      </div>
    </div>
  )
}

export default Home