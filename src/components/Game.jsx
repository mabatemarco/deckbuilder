import React from 'react';
import Hero from './Hero';
import Enemy from './Enemy'
import Level from '../images/jail.jpeg';
import HeroImg from '../images/hero.gif';
import EnemyImg from '../images/enemy.png';



let style = {
  backgroundImage: `url(${Level})`
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      characterMaxHealth: 100,
      characterCurrentHealth: 10,
      enemyMaxHealth: 100,
      enemyCurrentHealth: 100,
      characterMaxEnergy: 3,
      characterCurrentEnergy: 3,
      enemyMaxEnergy: 3,
      enemyCurrentEnergy: 3,
    }
  }


  render() {
    return (
      <div className="game">
        <div className="gameWindow" style={style}>
          <Hero
            maxHealth={this.state.characterMaxHealth}
            currentHealth={this.state.characterCurrentHealth}
            heroImg={HeroImg}
            maxEnergy={this.state.characterMaxEnergy}
            currentEnergy={this.state.characterCurrentEnergy}
          />
          <Enemy
            maxHealth={this.state.enemyMaxHealth}
            currentHealth={this.state.enemyCurrentHealth}
            enemyImg={EnemyImg}
            maxEnergy={this.state.enemyMaxEnergy}
            currentEnergy={this.state.enemyCurrentEnergy}
          />
        </div>
      </div>
    )
  }
}

export default Game