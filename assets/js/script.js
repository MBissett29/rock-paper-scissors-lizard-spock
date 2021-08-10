const Rock = document.getElementById("rock");
const Paper = document.getElementById("paper")
const Scissors = document.getElementById("scissors")
const Lizard = document.getElementById("lizard")
const Spock = document.getElementById("spock")

let result = "";

rock.addEventListener('click', function () {
    whoWins('Rock');
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

    if (compChoice === 1) {
        return "Rock";
    } else if (compChoice === 2) {
        return "Paper";
    } else if (compChoice === 3) {
        return "Scissors";
    } else if (compChoice === 4) {
        return "Lizard";
    } else if (compChoice === 5) {
        return "Spock";
    } else {
        return "error";
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