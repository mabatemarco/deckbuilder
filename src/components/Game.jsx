import React from 'react';
import Hero from './Hero';
import Enemy from './Enemy';
import Cards from './Cards';
import EndTurn from './EndTurn';
import LoseScreen from './LoseScreen'
import Level from '../images/jail.jpeg';
import HeroImg from '../images/hero.gif';
import EnemyImg from '../images/enemy.png';
import { startingDeck } from '../resources/Deck'



let style = {
  backgroundImage: `url(${Level})`
}



class Game extends React.Component {

  newCard = { 
    
    name: 'Strike',
    attack: 6,
    block: 0,
    cost: 1,
    img: '',
    showing: true

}

  defaultState = {
    lost: false,
    newGame: false,
    characterMaxHealth: 20,
    characterCurrentHealth: 20,
    enemyMaxHealth: 20,
    enemyCurrentHealth: 20,
    characterMaxEnergy: 3,
    characterCurrentEnergy: 3,
    characterBlock: 0,
    enemyBlock: 0,
    enemyUpcomingAttack: 0,
    enemyUpcomingBlock: 0,
    shuffledDeck: [],
    startingDeck: startingDeck,
    characterClass: '',
    enemyDisplayBlock: 0,
    enemyDisplayHurt: 0,
    characterDisplayBlock: 0,
    characterDisplayHurt: 0,
  }

  constructor() {
    super();
    this.state = this.defaultState
  }

  componentDidMount() {
    this.setUp()
  }

   componentDidUpdate() {
    if (this.state.newGame === true) {
      this.setState({
        ...this.defaultState
      })
    
    this.setUp();
  }
  }

  lostGame = () => {
    this.setState({
      newGame: true
    })
  }

  setUp = () => {
    let enemyUpcomingAttack = Math.floor(Math.random() * 12) + 4
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
    if (e.currentTarget.dataset.attack > 0 && this.state.characterCurrentEnergy > 0) {
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
    this.setState({
      lost: true
    })
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
    let discardDeck = this.state.shuffledDeck.slice(0, 6)
    let restOfDeck=this.state.shuffledDeck.slice(6)
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
        ...restOfDeck, ...newShuffledDeck
      ]
    }))
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
    let enemyUpcomingAttack = Math.floor(Math.random() * 12) + 4
    let enemyUpcomingBlock = Math.floor(Math.random() * 8)
    this.setState({
      enemyUpcomingBlock,
      enemyUpcomingAttack,
      characterBlock: 0
    })
  }


  render() {
    return (
      <div className="game">
        <div className="gameWindow" style={style}>
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
          {this.state.lost && <LoseScreen lostGame={this.lostGame} />}
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
            enemyImg={EnemyImg}
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