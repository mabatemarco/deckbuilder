import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <Link to='/'>
      <h1 className="title">DECKBUILDER</h1>
    </Link>
    <div className="links">
      <Link to='/how'>How to Play</Link>
      <Link to='/play'>Play!</Link>
    </div>
  </header>
)

export default Header