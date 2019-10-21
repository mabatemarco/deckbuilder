import React from 'react';
import Hero from './Hero';
import Enemy from './Enemy';
import Cards from './Cards';
import Level from '../images/jail.jpeg';
import HeroImg from '../images/hero.gif';
import EnemyImg from '../images/enemy.png';
import Strike from '../images/strike.png';
import BlockCard from '../images/blockcard.png';
import Bristle from '../images/bristle.png';



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
      shuffledDeck: [],
      startingDeck: [
        {
          name: 'Strike',
          attack: 6,
          block: 0,
          cost: 1,
          img: Strike
        },
        {
          name: 'Strike',
          attack: 6,
          block: 0,
          cost: 1,
          img: Strike
        },
        {
          name: 'Strike',
          attack: 6,
          block: 0,
          cost: 1,
          img: Strike
        },
        {
          name: 'Strike',
          attack: 6,
          block: 0,
          cost: 1,
          img: Strike
        },
        {
          name: 'Block',
          attack: 0,
          block: 5,
          cost: 1,
          img: BlockCard
        },
        {
          name: 'Block',
          attack: 0,
          block: 5,
          cost: 1,
          img: BlockCard
        },
        {
          name: 'Block',
          attack: 0,
          block: 5,
          cost: 1,
          img: BlockCard
        },
        {
          name: 'Bristle',
          attack: 4,
          block: 4,
          cost: 1,
          img: Bristle
        },
      ],
      discardDeck: [],


    }
  }

  componentWillMount() {
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
      shuffledDeck
    })
  }

  playerAttack = (e, prevState) => {
    let characterCurrentEnergy = this.state.characterCurrentEnergy - parseInt(e.currentTarget.dataset.energy)
    if (characterCurrentEnergy >= 0) {
      this.setState({
        characterCurrentEnergy
      })

      let characterBlock = this.state.characterBlock + parseInt(e.currentTarget.dataset.block)
      this.setState({
        characterBlock
      })


      let enemyCurrentHealth = this.state.enemyCurrentHealth - parseInt(e.currentTarget.dataset.attack)-this.state.enemyBlock
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
        enemyBlock=0
      }
      this.setState({
        enemyBlock
      })
    }
  }

  win = () => {
    alert('you win')
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
          <Cards
            discardDeck={this.state.discardDeck}
            shuffledDeck={this.state.shuffledDeck}
            playerAttack={this.playerAttack}
          />
          <Enemy
            maxHealth={this.state.enemyMaxHealth}
            currentHealth={this.state.enemyCurrentHealth}
            enemyImg={EnemyImg}
            maxEnergy={this.state.enemyMaxEnergy}
            currentEnergy={this.state.enemyCurrentEnergy}
            block={this.state.enemyBlock}
          />
        </div>
      </div>
    )
  }
}

export default Game