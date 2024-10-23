'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

let scores, currentScore, activePlayer, playing;

//starting conditions
const init = function () {
  //set the game to playing and reset the score and current score to 0 internally
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //reset the visible scores and current to 0
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  //set active player to 0
  activePlayer = 0;
  //remove winner class and active player class
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  //switch the players
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling the Dice Functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    //generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for rolled #1: if true switch player
    if (dice !== 1) {
      //add dice to current score
      //currentScore = currentScore + dice; alt way to write the below currentScore += dice
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //if === 1 switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to the active player score
    //scores[1] = scores[1] + currentScore;
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //.2 check score is >=100
    if (scores[activePlayer] >= 50) {
      //finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
