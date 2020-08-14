"use strict"
let computerGuess;
let userGuessLog = [];
let attepmts = 0;
let maxGuesses = 10;

function gameEnded() {
   document.getElementById('newGameButton').style.display = 'inline';
   document.getElementById('easyBtn').style.display = 'none';
   document.getElementById('hardBtn').style.display = 'none';
   document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}

function easyMode() {
   maxGuesses = 10;
   document.getElementById('easyBtn').className = 'activeButton';
   document.getElementById('hardBtn').className = '';
}

function hardMode() {
   maxGuesses = 5;
   document.getElementById('hardBtn').className = 'activeButton';
   document.getElementById('easyBtn').className = '';
}

function newGame() {
   window.location.reload();
}

function init() {
   computerGuess = Math.floor(Math.random() * 100 + 1);
   document.getElementById('newGameButton').style.display = 'none';
}

function compareGuess() {
   let userGuess = " " + document.getElementById('inputBox').value;

   userGuessLog.push(userGuess);
   document.getElementById('guessLog').innerHTML = userGuessLog;

   attepmts++;
   document.getElementById('attepmts').innerHTML = attepmts;
   if (userGuessLog.length < maxGuesses) {

      if (userGuess > computerGuess) {
         document.getElementById('textOutput').innerHTML = 'Загаданное число меньше';
         document.getElementById('inputBox').value = "";
      } else if (userGuess < computerGuess) {
         document.getElementById('textOutput').innerHTML = 'Загаданное число больше';
         document.getElementById('inputBox').value = "";
      } else {
         document.getElementById('textOutput').innerHTML = 'Вы угадали! c' + attepmts + ' попытки';
         document.getElementById('container').style.backgroundColor = 'green';
         gameEnded();
      }
   } else {
      if (userGuess > computerGuess) {
         document.getElementById('textOutput').innerHTML = 'Вы проиграли!' + '<br> номер был' + computerGuess;
         document.getElementById('container').style.backgroundColor = '#e82c4e';
         gameEnded();
      } else if (userGuess < computerGuess) {
         document.getElementById('textOutput').innerHTML = 'Вы проиграли!' + '<br> номер был' + computerGuess;
         document.getElementById('container').style.backgroundColor = '#e82c4e';
         gameEnded();
      } else {
         document.getElementById('textOutput').innerHTML = 'Вы угадали! c' + attepmts + ' попытки';
         document.getElementById('container').style.backgroundColor = 'green';
         gameEnded();
      }
   }
}