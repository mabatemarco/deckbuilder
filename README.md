# Deckbuilder Game
A card-based combat game where strategy, luck, and skill are needed.  Choose cards from your deck to carry out combat. Like the Game *Slay the Spire*, but worse.

## Future Goals
-Upgrades to character

-More Cards with effects other than attack, defend, heal.

-More enemies with additional effects.

-Clean up and refactor code (Almost all functions are stored in Game component).

-Reduce size of img files, initial loading is very long.

-More animations.

-Better shuffling algorithm.

-Improve the layout of status icons to make them more noticable and intuitive.

##Challenges Faced
-Ordering the events (player turn, enemy turn, win, lose) with appropriate timing

-Animating characters and actions

-Dealing with lots of info

-Creating Content

-Finding and editing img files

## Hierarchy

```
Home 
│
└──How it Works
│   
|__Game
  |__Character
  |__Cards
  |__Enemy
```