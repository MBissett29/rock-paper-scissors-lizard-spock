/**
 * Player Choice Function
 * Display Player Choice Function
 */
 function whoWins(playerChoice) {
    if (playerChoice === compChoice) {
        result = 'Draw!';
    } else {
        if (playerChoice === "Rock" && (compChoice == "Scissors" || compChoice == "Lizard")) {
            result = 'Win!';
        } else if (playerChoice=== "Paper" && (compChoice == "Rock" || compChoice == "Spock")) {
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
}

/**
 * Generates a computer choice by assigning it a rondom number
 */

function decideCompChoice() {

    let compChoice = Math.floor(Math.random() *5) +1
    
    if (compChoice === 1) {
       return "rock";
    } else if (compChoice === 2) { 
       return "paper";
    } else if (compChoice === 3) {
    return "scissors";
    } else if (compChoice === 4) {
    return "lizard";
    } else if (compChoice === 5) {
    return "spock";
    } else {
        return "error";
    }
}
/**
 * Show Results Function
 */

/**
 * Score Function
 */