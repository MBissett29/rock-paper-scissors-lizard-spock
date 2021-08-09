/**
 * Player Choice Function
 * Display Player Choice Function
 */


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