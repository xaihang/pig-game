'use strict';

//__________________ 9999999________________//

//__________________ global variables________________//
//player 0 score: specific by id (#); El = element
const score0El = document.getElementById('score--0'); 
        //either one is OK// 
// const score0 = document.querySelector('score--0');  

//player 1 score: specific by id (#)  
const score1El = document.getElementById('score--1'); 

// dice images 
const diceEl = document.querySelector.apply('.dice'); 

//  display settings at the very beginning or starting conditions: 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); 




//__________________ 9999999________________//