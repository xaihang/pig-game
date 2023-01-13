'use strict';

//__________________ 9999999________________//

//__________________ selecting elements________________//

//player 0
const player0El = document.querySelector('.player--0');
//player 1
const player1El = document.querySelector('.player--1');

//player 0 score: specific by id (#); El = element
const score0El = document.getElementById('score--0'); 
        //either one is OK// 
// const score0 = document.querySelector('score--0');  

//player 1 score: specific by id (#)  
const score1El = document.getElementById('score--1'); 

// current score for player 0
const current0El = document.getElementById('current--0');

// current score for player 1
const current1El = document.getElementById('current--1');

// dice images 
const diceEl = document.querySelector('.dice'); 

//  new button:
const btnNew = document.querySelector('.btn--new');

//  roll button:
const btnRoll = document.querySelector('.btn--roll')

//  hold button:
const btnHold = document.querySelector('.btn--hold');


//__________________ starting conditions________________//
        //  display settings at the very beginning:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // dice is now hidden until 'btnRoll' is 'clicked'

//final scores that's accumulated - store in an array:
let scores = [0, 0]; 

// currentScore needs to be outside/global so we can update it each time
let currentScore = 0; 

// to track the current/active player:
let activePlayer = 0; 

// is game still playing? boolean value
let playing = true; 

// switch player function: reusable code no need to return anything
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    // switch to next player: reassigning the active player
    activePlayer = activePlayer === 0 ? 1 : 0; 

    //background color will toggle between the players - current player will have a lighter bg of pink
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

//__________________ rolling dice functionality________________//
btnRoll.addEventListener('click', function () {
    if (playing) {
          // 1. generate a random dice roll - each time we roll a dice, we want a new random number
       const dice = Math.trunc(Math.random() * 6) + 1; 

        // 2. display the dice
        diceEl.classList.remove('hidden'); 
        diceEl.src =`dice-${dice}.png`; // this dynamic manipulate the dice image and will display it at random 

        // 3. check if roll is 1 ? if true, switch player
        if(dice !== 1) {
            // add the dice to the current score - make sure it is outside of function handler 
            currentScore += dice; 

            //select current player dynamically and add score based on the dice number rolled:
            document.getElementById(`current--${activePlayer}`)
            .textContent = currentScore;

        // then once current score will be added base on the dice number rolled - here is the display:
        // current0El.textContent = currentScore; // this only work for player 0
        } else {
            switchPlayer(); 
        // instead of the below codes - wrote the switchPlayer function 
        //as we switch the current player - we need to reset the current score for that player
        // document.getElementById(`current--${activePlayer}`).textContent = 0;
        // currentScore = 0;

        // // switch to next player: reassigning the active player
        // activePlayer = activePlayer === 0 ? 1 : 0; 

        // //background color will toggle between the players - current player will have a lighter bg of pink
        // player0El.classList.toggle('player--active');
        // player1El.classList.toggle('player--active');
        }
    }   
});


btnHold.addEventListener('click', function() {
    if(playing) {
        // 1. add current score to active player's score
        // scores[1] = scores[1] + currentScore; 
        scores[activePlayer] += currentScore;

         // display the active player's score:
        document.getElementById(`score--${activePlayer}`)
        .textContent = scores[activePlayer];
 
        // 2. check if player's score is >= 100 ? 
        if (scores[activePlayer] >= 100) {
        //  If yes, finish the game!
            playing = false;  // flag that game is over - no btn should be click-able!
            document.querySelector(`.player--${activePlayer}`)
            .classList.add('play--winner');
            document.querySelector(`.player--${activePlayer}`)
            .classList.remove('play--active');
        } else {
        // if no, switch player
        switchPlayer(); 
        }    
    }
});

//add current score to total score 

// when score is >= 100; current player wins!


