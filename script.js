"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

diceEl.classList.add("hidden");
score0El.textContent = 0;
score1El.textContent = 0;
