/*
 * GAME FUNCTIONALIY:
 *  - Player must guess a number between a min and max
 *  - Player gets a fixed number of attempts
 *  - Notify player of attempts remaining
 *  - Notify player of correct answer if lose
 *  - Let player choose to play again
 */

 // Game values
 let min = 1,
     max = 10,
     winningNum = 2,
     guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;
