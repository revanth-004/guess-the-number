'use strict';

//VARIABLES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let correctFlag = 0;
let wrongFlag = 0;

//FUNTIONS
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  } else if (Number(guess) === secretNumber && !wrongFlag) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    if (
      document.querySelector('.highscore').textContent <
      document.querySelector('.score').textContent
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
    document.querySelector('body').style.background = '#05cc02';
    correctFlag = 1;
  } else {
    if (document.querySelector('.score').textContent === '1') {
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost the game');
      document.querySelector('body').style.background = '#cc0202';
      document.querySelector('.number').textContent = secretNumber;
      wrongFlag = 1;
    } else if (
      document.querySelector('.score').textContent > '0' &&
      !correctFlag
    ) {
      document.querySelector('.score').textContent--;
      if (document.querySelector('.guess').value > secretNumber) {
        if (document.querySelector('.guess').value > secretNumber + 1) {
          displayMessage('Too high!');
        } else {
          displayMessage('Too close!');
        }
      } else if (document.querySelector('.guess').value < secretNumber) {
        if (document.querySelector('.guess').value < secretNumber - 1) {
          displayMessage('Too low!');
        } else {
          displayMessage('Too close!');
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // RESET ALL TO DEFAULT :
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  correctFlag = 0;
  wrongFlag = 0;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.background = '#222';
});
