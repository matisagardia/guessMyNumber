'use strict';

// Generate a random number
let number = Math.trunc(Math.random() * 20) + 1;



// Generate the score value to interact based on the correct choices
let score = 20;
let highScore = 0;

// Event listener for the check button, which triggers all the game

let checkBtn = document.querySelector(".check");

checkBtn.addEventListener("click", () => {
    let guess = Number(document.querySelector(".guess").value);

    if(!guess) {
        // If there is no number
        document.querySelector(".message").textContent = "🚫 No number!";
        // If the number is correct
    } else if(guess === number){
        document.querySelector(".message").textContent = "👍 Correct number!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = number;
        if(score > highScore){
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
        }
        // If the number is not valid
    } else if(guess < 0 || guess > 20){
        document.querySelector(".message").textContent = "The number has to be higher than 0 and lower than 20.";
        //If the number is incorrect but valid and higher
    } else if(guess > number){
        if(score > 1) {
            document.querySelector(".message").textContent = "👆 Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
        // If the number is incorrect but valid and lower
    } else if(guess < number){
        if(score > 1) {
            document.querySelector(".message").textContent = " 👇 Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
});

let againBtn = document.querySelector(".again");

againBtn.addEventListener("click", () => {
    score = 20;
    document.querySelector(".score").textContent = score;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = '';
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
})

let resetHighScore = document.querySelector(".highscr");

resetHighScore.addEventListener("click", () =>{
    highScore = 0;
    document.querySelector(".highscore").textContent = highScore;
})