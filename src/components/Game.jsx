import React from 'react';
import Hero from './Hero';
import Enemy from './Enemy';
import Cards from './Cards';
import EndTurn from './EndTurn';
import Level from '../images/jail.jpeg';
import HeroImg from '../images/hero.gif';
import EnemyImg from '../images/enemy.png';
import { startingDeck } from '../resources/Deck'



let style = {
  backgroundImage: `url(${Level})`
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      characterMaxHealth: 100,
      characterCurrentHealth: 100,
      enemyMaxHealth: 100,
      enemyCurrentHealth: 100,
      characterMaxEnergy: 3,
      characterCurrentEnergy: 3,
      enemyMaxEnergy: 3,
      enemyCurrentEnergy: 3,
      characterBlock: 0,
      enemyBlock: 0,
      cardsClass: 'cards',
      enemyUpcomingAttack: 0,
      enemyUpcomingBlock: 0,
      shuffledDeck: [],
      startingDeck: startingDeck
    }
  }

  componentDidMount() {
    let enemyUpcomingAttack = Math.floor(Math.random() * 12)
    let enemyUpcomingBlock = Math.floor(Math.random() * 8)
    let shuffledDeck = this.state.startingDeck;
    let currentIndex = this.state.startingDeck.length - 1;
    let temporaryValue;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      temporaryValue = shuffledDeck[currentIndex];
      shuffledDeck[currentIndex] = shuffledDeck[randomIndex];
      shuffledDeck[randomIndex] = temporaryValue;
      currentIndex--;
    }
    this.setState({
      shuffledDeck,
      enemyUpcomingAttack,
      enemyUpcomingBlock
    })

  }

  flipCard = (prevIndex) => {
    this.setState(prevState => ({
      shuffledDeck: prevState.shuffledDeck.map((card, index) => index === prevIndex ? {
        ...card,
        showing: false
      } : card)
    }))
  }

  playerAttack = (e, index) => {
    let characterCurrentEnergy = this.state.characterCurrentEnergy - parseInt(e.currentTarget.dataset.energy)
    if (characterCurrentEnergy >= 0) {
      this.flipCard(index)
      this.setState({
        characterCurrentEnergy
      })

      let characterBlock = this.state.characterBlock + parseInt(e.currentTarget.dataset.block)
      this.setState({
        characterBlock
      })


      let enemyCurrentHealth = this.state.enemyCurrentHealth - parseInt(e.currentTarget.dataset.attack) + this.state.enemyBlock
      if (enemyCurrentHealth > 0) {
        this.setState({
          enemyCurrentHealth
        })
      } else {
        enemyCurrentHealth = 0
        this.setState({
          enemyCurrentHealth
        })
        this.win()
      }

      let enemyBlock = this.state.enemyBlock - parseInt(e.currentTarget.dataset.attack)
      if (enemyBlock < 0) {
        enemyBlock = 0
      }
      this.setState({
        enemyBlock
      })
    }
  }

  win = () => {
    alert('you win')
  }

  lose = () => {
    alert('you lose')
  }

  endTurn = () => {
    let characterCurrentEnergy = this.state.characterMaxEnergy
    this.setState({
      characterCurrentEnergy
    })
    let discardDeck = this.state.shuffledDeck.splice(0, 5)
    let newShuffledDeck = discardDeck;
    let currentIndex = discardDeck.length - 1;
    let temporaryValue;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      temporaryValue = newShuffledDeck[currentIndex];
      newShuffledDeck[currentIndex] = newShuffledDeck[randomIndex];
      newShuffledDeck[randomIndex] = temporaryValue;
      currentIndex--;
    }
    const newShuffledDeck2 = newShuffledDeck.map(card => 
      card.showing = true
    )
    this.setState(({
      shuffledDeck: [
        ...this.state.shuffledDeck, ...newShuffledDeck
      ]
    }))
    let enemyBlock = this.state.enemyUpcomingBlock
    this.setState({
      enemyBlock
    })
    let characterCurrentHealth
    if (this.state.characterBlock > this.state.enemyUpcomingAttack) {
      characterCurrentHealth = this.state.characterCurrentHealth
    } else {
      characterCurrentHealth = this.state.characterCurrentHealth - this.state.enemyUpcomingAttack + this.state.characterBlock
    }
    if (characterCurrentHealth > 0) {
      this.setState({
        characterCurrentHealth
      })
    } else {
      characterCurrentHealth = 0
      this.setState({
        characterCurrentHealth
      })
      this.lose()
    }

    let characterBlock = this.state.characterBlock - this.state.enemyUpcomingAttack
    if (characterBlock < 0) {
      characterBlock = 0
    }
    this.setState({
      characterBlock
    })
    let enemyUpcomingAttack = Math.floor(Math.random() * 12)
    let enemyUpcomingBlock = Math.floor(Math.random() * 8)
    this.setState({
      enemyUpcomingBlock,
      enemyUpcomingAttack,
      characterBlock:0
    })
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
            block={this.state.characterBlock}
          />
          {this.state.shuffledDeck.length >= 5 &&
            <Cards
              cardsClass={this.state.cardsClass}
              discardDeck={this.state.discardDeck}
              shuffledDeck={this.state.shuffledDeck}
              playerAttack={this.playerAttack}
            />}
          <Enemy
            maxHealth={this.state.enemyMaxHealth}
            currentHealth={this.state.enemyCurrentHealth}
            enemyImg={EnemyImg}
            maxEnergy={this.state.enemyMaxEnergy}
            currentEnergy={this.state.enemyCurrentEnergy}
            block={this.state.enemyBlock}
            upcomingAttack={this.state.enemyUpcomingAttack}
            upcomingBlock={this.state.enemyUpcomingBlock}
          />
          <EndTurn endTurn={this.endTurn} />
        </div>
      </div>
    )
  }
}

export default Game