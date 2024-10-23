
# GameNight TieBreaker 

# Overview
The Dice Game is a simple, turn-based game for two players. Each player takes turns to roll a dice, and the first player to reach a set winning score wins the game. The game alternates between players on each turn, and the current active player is switched after every dice roll.


## How to Play

1. The game starts with Player 1 (represented as Player 0 in the code).
2. Players take turns rolling a dice.
3. After each dice roll, the rolled number is added to the player's current score.
4. If a player rolls a 1, their current score is reset, and it becomes the next player's turn.
5. The first player to reach or exceed the set winning score wins the game.
## Features

- Two-player alternating turns.
- Dice roll simulation.
- Players' scores are tracked and displayed.
- Simple win condition (first player to reach a certain score).


## Rules

- Players roll a dice to accumulate points.
- If a player rolls any number from 2 to 6, that value is added to their current score.
- If a player rolls a 1, their current round score is lost, and their turn is over.
- Players can choose to "Hold" their current score and pass the turn to the other player, saving their points.
- The game continues until one player reaches the set winning score.
## Installation

1. clone the Repo

```bash
git clone https://github.com/your-username/dice-game.git

```
2. Open the index.html file in your browser to play the game.
## Tech Stack

**HTML/CSS:**  For the game interface

**JS:** For the game Logic, Score tracking, and dice roll simulation


## License

[MIT](https://choosealicense.com/licenses/mit/)

