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
     winningNum = getRandomNum(min, max),
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

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  // console.log(guess); //Testing purposes only
  
  // Validate input
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // Check if won
  if(guess === winningNum) {
    // Game over / condition: won
    gameOver(true, `${winningNum} is correct...you win!`);
  } else {
    // wrong guess
    //console.log(guess); // testing    
    guessesLeft -= 1;
  
    if(guessesLeft === 0) {
      //game over / condition: lost
      gameOver(false, `Game over. Sorry, you lost. The correct answer was ${winningNum}.`);

    } else {
      //console.log(winningNum); // testing
      // game continues - answer wrong

      // Change border to red
      guessInput.style.borderColor = 'red';


      // Clear input
      guessInput.value = '';

      // Tell guesses remaining
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left!`, 'red');
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
    // Change border to green
    guessInput.style.borderColor = color;
    // Change text color
    message.style.color = color;
    // Set message to winner
    setMessage(msg);

    // Play again?
    guessBtn.value = 'Play Again';
    guessBtn.style.background = 'green';
    guessBtn.style.color = "#fff";
    guessBtn.className += 'play-again';
}

// Get random winning number
function getRandomNum(min, max) {
   return(Math.floor(Math.random() * (max - min + 1)+min));
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
