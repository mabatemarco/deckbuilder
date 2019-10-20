import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import HowToPlay from './components/HowToPlay';
import Game from './components/Game';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path='/' render={() => (<Home />)} />
        <Route path='/how' render={() => (<HowToPlay />)} />
        <Route path='/play' render={() => (<Game />)} />
        <Footer/>
      </div>
    );
  }
}

export default App;
