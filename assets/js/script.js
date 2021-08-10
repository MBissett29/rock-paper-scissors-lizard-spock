const Rock = document.getElementById("rock");
const Paper = document.getElementById("paper")
const Scissors = document.getElementById("scissors")
const Lizard = document.getElementById("lizard")
const Spock = document.getElementById("spock")

let result = "";

Rock.addEventListener('click', function () {
    whoWins('Rock');
});
Paper.addEventListener('click', function () {
    whoWins('Paper');
});
Scissors.addEventListener('click', function () {
    whoWins('Scissors');
});
Lizard.addEventListener('click', function () {
    whoWins('Lizard');
});
Spock.addEventListener('click', function () {
    whoWins('Spock');
});



/**
 * Player Choice Function
 * Display Player Choice Function
 */
function whoWins(playerChoice) {
    compChoice = decideCompChoice()
    if (playerChoice === compChoice) {
        result = 'Draw!';
    } else {
        if (playerChoice === "Rock" && (compChoice == "Scissors" || compChoice == "Lizard")) {
            result = 'Win!';
        } else if (playerChoice === "Paper" && (compChoice == "Rock" || compChoice == "Spock")) {
            result = 'Win!';
        } else if (playerChoice === "Scissors" && (compChoice == "Paper" || compChoice == "Lizard")) {
            result = 'Win!';
        } else if (playerChoice === "Lizard" && (compChoice == "Spock" || compChoice == "Paper")) {
            result = 'Win!';
        } else if (playerChoice === "Spock" && (compChoice == "Scissors" || compChoice == "Rock")) {
            result = 'Win!';
        } else {
            result = 'Loss!';
        }
        results(result, playerChoice, compChoice);
    }
}

/**
 * Generates a computer choice by assigning it a rondom number
 */

function decideCompChoice() {

    let compChoice = Math.floor(Math.random() * 5) + 1

    switch (compChoice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        case 4:
            return "Lizard";
        case 5:
            return "Spock";
    }
}
/**
 * Show Results Function
 */
function results(result, playerChoice, compChoice) {
    console.log(result);
    console.log("player = " + playerChoice);
    console.log("comp = " + compChoice);
    result = "";
}
/**
 * Score Function
 */
function playerScore () {

    let zeroScore = parseInt(document.getElementById('wins').innerText);
    document.getElementById('wins').innerText = ++zeroScore;
}

function compScore() {

    let zeroScore = parseInt(document.getElementById('losses').innerText);
    document.getElementById('losses').innerText = ++zeroScore;
}