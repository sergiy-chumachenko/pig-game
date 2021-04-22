"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

const btnNewEl = document.querySelector(".btn--new");
const btnRollEl = document.querySelector(".btn--roll");
const btnHoldEl = document.querySelector(".btn--hold");

const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");

// Starting conditions
diceEl.classList.add("hidden");
score0El.textContent = 0;
score1El.textContent = 0;

let currentScore = 0;

// Rolling dice functionality
btnRollEl.addEventListener("click", function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1: if true
  if (dice !== 1) {
    // add current score
    currentScore += dice;
    // TODO: Change in future
    currentScore0El.textContent = currentScore;
  } else {
    // switch to next player
  }
});
