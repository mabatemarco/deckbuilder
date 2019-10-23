import Strike from '../images/strike.png';
import BlockCard from '../images/blockcard.png';
import Bristle from '../images/bristle.png';
import Heart from '../images/heart.png'

export const startingDeck = [
  {
    name: 'Strike',
    attack: 6,
    block: 0,
    heal:0,
    cost: 1,
    img: Strike,
    showing: true
  },
  {
    name: 'Strike',
    attack: 6,
    block: 0,
    heal:0,
    cost: 1,
    img: Strike,
    showing: true
  },
  {
    name: 'Strike',
    attack: 6,
    block: 0,
    heal:0,
    cost: 1,
    img: Strike,
    showing: true
  },
  {
    name: 'Block',
    attack: 0,
    block: 5,
    heal:0,
    cost: 1,
    img: BlockCard,
    showing: true
  },
  {
    name: 'Block',
    attack: 0,
    block: 5,
    heal:0,
    cost: 1,
    img: BlockCard,
    showing: true
  },
  {
    name: 'Block',
    attack: 0,
    block: 5,
    heal:0,
    cost: 1,
    img: BlockCard,
    showing: true
  },
  {
    name: 'Bristle',
    attack: 4,
    block: 2,
    heal:0,
    cost: 1,
    img: Bristle,
    showing: true
  },
]

export const upgrade1 = [
  {
    index:0,
    name: 'Big Nasty',
    attack: 15,
    block: 0,
    heal:0,
    cost: 2,
    img: Strike,
    showing: true
  },
  {
    index:1,
    name: 'Best Offense',
    attack: 0,
    block: 12,
    heal:0,
    cost: 2,
    img: BlockCard,
    showing: true
  },
  {
    index:2,
    name: 'Heal',
    attack: 0,
    block: 0,
    heal:10,
    cost: 1,
    img: Heart,
    showing: true
  }
]

export const upgrade2 = [
  {
    index: 0,
    name: 'Ca-Runch',
    attack: 30,
    block: 0,
    heal:0,
    cost: 3,
    img: Strike,
    showing: true
  },
  {
    index: 1,
    name: 'Impermeable',
    attack: 0,
    block: 25,
    heal:0,
    cost: 3,
    img: BlockCard,
    showing: true
  },
  {
    index: 2,
    name: 'Restore',
    attack: 0,
    block: 0,
    heal:20,
    cost: 2,
    img: Heart,
    showing: true
  }
]