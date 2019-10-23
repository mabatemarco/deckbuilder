import React from 'react';
import Hero from './Hero';
import Enemy from './Enemy';
import Cards from './Cards';
import EndTurn from './EndTurn';
import LoseScreen from './LoseScreen'
import WinScreen from './WinScreen'
import BigWin from './BigWin'
import NotEnough from './NotEnough'
import HeroImg from '../images/hero.gif';
import EnemyImg from '../images/enemy.png';
import EnemyImg2 from '../images/enemy2.png';
import EnemyImg3 from '../images/enemy3.png';
import { startingDeck, upgrade1, upgrade2 } from '../resources/Deck'
import { GetId } from '../services/api'
import { getGif } from '../services/api-helper'

class Game extends React.Component {

  defaultState = {
    gif:'',
    enemyImg: [EnemyImg, EnemyImg2, EnemyImg3],
    audio: '',
    notEnough: false,
    level: 1,
    lost: false,
    newGame: false,
    won: false,
    upgrades: [],
    characterMaxHealth: 50,
    characterCurrentHealth: 50,
    enemyMaxHealth: 1,
    enemyCurrentHealth: 1,
    characterMaxEnergy: 3,
    characterCurrentEnergy: 3,
    characterBlock: 0,
    enemyBlock: 0,
    enemyUpcomingAttack: 0,
    enemyUpcomingBlock: 0,
    shuffledDeck: [],
    startingDeck: startingDeck,
    characterClass: '',
    enemyClass: '',
    enemyDisplayBlock: 0,
    enemyDisplayHurt: 0,
    characterDisplayBlock: 0,
    characterDisplayHurt: 0,
    enemyModifier: 1
  }

  constructor() {
    super();
    this.state = this.defaultState
  }

  async componentDidMount() {
    this.setUp()
    this.setState({
      upgrades: upgrade1
    })
    let response = await GetId()
    let audioId = response.data.results[0].url
    let audio = new Audio(audioId)
    this.setState({
      audio
    })
    const gif = await getGif();
    console.log(gif)
    this.setState({
      gif
    })
  }

  componentDidUpdate() {
    if (this.state.newGame === true) {
      this.setState({
        ...this.defaultState
      })

      this.setUp();
    }
  }

  newGame = () => {
    this.setState({
      newGame: true
    })
  }

  setUp = () => {
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
      enemyUpcomingAttack: Math.floor(Math.random() * 12) + 4,
      enemyUpcomingBlock: Math.floor(Math.random() * 8)
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

  addCard = (cardIndex) => {
    if (this.state.upgrades.length > 1) {
      this.setState(prevState => ({
        shuffledDeck: [...prevState.shuffledDeck, ...prevState.upgrades.filter(card => card.index === cardIndex)],
        upgrades: prevState.upgrades.filter(card => card.index !== cardIndex)
      }))
    }
  }

  nextRound = (prevState) => {
    this.setState(prevState => ({
      level: prevState.level + 1,
      won: false,
      enemyCurrentHealth: prevState.enemyMaxHealth * 2.5,
      enemyMaxHealth: prevState.enemyMaxHealth * 2.5,
      upgrades: upgrade2,
      characterCurrentEnergy: 3,
      enemyModifier: prevState.enemyModifier + .6,
      enemyUpcomingAttack: Math.floor(Math.random() * 12 * this.state.enemyModifier) + 4,
      enemyUpcomingBlock: Math.floor(Math.random() * 8)
    }))
    this.shuffleUp()
  }

  shuffleUp = () => {
    let discardDeck = this.state.shuffledDeck.slice(0, 6)
    let restOfDeck = this.state.shuffledDeck.slice(6)
    let newShuffledDeck = discardDeck;
    let currentIndex = discardDeck.length - 1;
    let temporaryValue;
    let randomIndex;
    newShuffledDeck.map(card =>
      card.showing = true
    )
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      temporaryValue = newShuffledDeck[currentIndex];
      newShuffledDeck[currentIndex] = newShuffledDeck[randomIndex];
      newShuffledDeck[randomIndex] = temporaryValue;
      currentIndex--;
    }
    this.setState(({
      shuffledDeck: [
        ...restOfDeck, ...newShuffledDeck
      ]
    }))
  }

  lose = () => {
    this.setState({
      lost: true
    })
  }

  playerAttack = (e, index) => {
    let enemyDisplayBlock
    let enemyDisplayHurt
    if (this.state.enemyBlock > 0) {
      if (e.currentTarget.dataset.attack > this.state.enemyBlock) {
        enemyDisplayBlock = this.state.enemyBlock
      } else {
        enemyDisplayBlock = e.currentTarget.dataset.attack
      }
    }
    if (e.currentTarget.dataset.attack > this.state.enemyBlock) {
      enemyDisplayHurt = e.currentTarget.dataset.attack - this.state.enemyBlock
    }
    if (e.currentTarget.dataset.attack > 0 && this.state.characterCurrentEnergy >= e.currentTarget.dataset.energy) {
      this.setState(prevState => ({
        characterClass: 'characterAttack',
        enemyClass: 'hurt',
        enemyDisplayBlock,
        enemyDisplayHurt
      }))
      setTimeout(() => {
        this.setState({
          characterClass: '',
          enemyClass: '',
          enemyDisplayBlock: 0,
          enemyDisplayHurt: 0
        });
      }, 500)
    }
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


      let enemyCurrentHealth
      if (this.state.enemyBlock >= e.currentTarget.dataset.attack) {
        enemyCurrentHealth = this.state.enemyCurrentHealth
      } else {
        enemyCurrentHealth = this.state.enemyCurrentHealth - parseInt(e.currentTarget.dataset.attack) + this.state.enemyBlock
      }
      if (enemyCurrentHealth > 0) {
        this.setState({
          enemyCurrentHealth
        })
      } else {
        this.setState({
          enemyCurrentHealth: 0,
          won: true,
        })
      }

      let enemyBlock = this.state.enemyBlock - parseInt(e.currentTarget.dataset.attack)
      if (enemyBlock < 0) {
        enemyBlock = 0
      }
      this.setState({
        enemyBlock
      })

      let characterCurrentHealth = this.state.characterCurrentHealth + parseInt(e.currentTarget.dataset.heal)
      if (characterCurrentHealth > this.state.characterMaxHealth) {
        characterCurrentHealth = this.state.characterMaxHealth
      }
      this.setState({
        characterCurrentHealth
      })
    } else {
      this.setState({
        notEnough: true
      })
      setTimeout(() => {
        this.setState({
          notEnough: false
        });
      }, 500)
    }
  }

  endTurn = () => {
    let characterDisplayBlock
    let characterDisplayHurt
    if (this.state.characterBlock > 0) {
      if (this.state.enemyUpcomingAttack > this.state.characterBlock) {
        characterDisplayBlock = this.state.characterBlock
      } else {
        characterDisplayBlock = this.state.enemyUpcomingAttack
      }
    }
    if (this.state.enemyUpcomingAttack > this.state.characterBlock) {
      characterDisplayHurt = this.state.enemyUpcomingAttack - this.state.characterBlock
    }
    if (this.state.enemyUpcomingAttack > 0) {
      this.setState(prevState => ({
        enemyClass: 'enemyAttack',
        characterClass: 'hurt',
        characterDisplayBlock,
        characterDisplayHurt
      }))
      setTimeout(() => {
        this.setState({
          characterClass: '',
          enemyClass: '',
          characterDisplayBlock: 0,
          characterDisplayHurt: 0
        });
      }, 500)
    }
    let characterCurrentEnergy = this.state.characterMaxEnergy
    this.setState({
      characterCurrentEnergy
    })
    this.shuffleUp()

    let enemyBlock = this.state.enemyUpcomingBlock
    this.setState({
      enemyBlock
    })
    let characterCurrentHealth
    if (this.state.characterBlock >= this.state.enemyUpcomingAttack) {
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
    this.setState({
      enemyUpcomingBlock: Math.floor(Math.random() * 8),
      enemyUpcomingAttack: Math.floor(Math.random() * 12 * this.state.enemyModifier) + 4,
      characterBlock: 0
    })
  }


  render() {
    return (
      <div className="game">
        <div className="gameWindow">
          <Hero
            hurt={this.state.characterDisplayHurt}
            blocked={this.state.characterDisplayBlock}
            maxHealth={this.state.characterMaxHealth}
            currentHealth={this.state.characterCurrentHealth}
            heroImg={HeroImg}
            maxEnergy={this.state.characterMaxEnergy}
            currentEnergy={this.state.characterCurrentEnergy}
            block={this.state.characterBlock}
            class={this.state.characterClass}
          />
          {this.state.lost
            && <LoseScreen
              newGame={this.newGame}
            />}
          {this.state.notEnough && <NotEnough notEnough={this.state.notEnough} />}
          {this.state.won && this.state.level === 3 &&
            <BigWin
            newGame={this.newGame}
            gif={this.state.gif}
            />
          }
          {this.state.won && this.state.level < 3 &&
            <WinScreen
              upgrades={this.state.upgrades}
              nextRound={this.nextRound}
              addCard={this.addCard}
            />}
          {this.state.shuffledDeck.length >= 5 &&
            <Cards
              discardDeck={this.state.discardDeck}
              shuffledDeck={this.state.shuffledDeck}
              playerAttack={this.playerAttack}
            />}
          <Enemy
            hurt={this.state.enemyDisplayHurt}
            blocked={this.state.enemyDisplayBlock}
            maxHealth={this.state.enemyMaxHealth}
            currentHealth={this.state.enemyCurrentHealth}
            enemyImg={this.state.enemyImg[this.state.level - 1]}
            maxEnergy={this.state.enemyMaxEnergy}
            currentEnergy={this.state.enemyCurrentEnergy}
            block={this.state.enemyBlock}
            upcomingAttack={this.state.enemyUpcomingAttack}
            upcomingBlock={this.state.enemyUpcomingBlock}
            class={this.state.enemyClass}
          />
          <EndTurn endTurn={this.endTurn} />
        </div>
      </div>
    )
  }
}

export default Game