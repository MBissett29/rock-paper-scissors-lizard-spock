const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

let result = "";
let playerChoice = "";
let compChoice = "";

rock.addEventListener("click", function () {
    whoWins("Rock");
});
paper.addEventListener("click", function () {
    whoWins("Paper");
});
scissors.addEventListener("click", function () {
    whoWins("Scissors");
});
lizard.addEventListener("click", function () {
    whoWins("Lizard");
});
spock.addEventListener("click", function () {
    whoWins("Spock");
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
        default:
            return "Error";
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

    if (result === 'Win!') {
        playerChoice = playerScore()
    } else if (result === 'Loss!') {
        compChoice = compScore()
    } else {
        error
    }

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