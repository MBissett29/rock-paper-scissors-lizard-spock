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
    compChoice = decideCompChoice();
    console.log("player = " + playerChoice + " || computer = " + compChoice);

    if (playerChoice == compChoice) {
        result = "Draw!";
    } else {
        if (playerChoice == "Rock" && (compChoice == "Scissors" || compChoice == "Lizard")) {
            result = "Win!";
        } else if (playerChoice == "Paper" && (compChoice == "Rock" || compChoice == "Spock")) {
            result = "Win!";
        } else if (playerChoice == "Scissors" && (compChoice == "Paper" || compChoice == "Lizard")) {
            result = "Win!";
        } else if (playerChoice == "Lizard" && (compChoice == "Spock" || compChoice == "Paper")) {
            result = "Win!";
        } else if (playerChoice == "Spock" && (compChoice == "Scissors" || compChoice == "Rock")) {
            result = "Win!";
        } else {
            result = "Loss!";
        }
    }
    console.log(result);
    results(result, playerChoice, compChoice);
}

/**
 * Generates a computer choice by assigning it a rondom number
 */

function decideCompChoice() {

    let compChoiceNum = Math.floor(Math.random() * 5) + 1;

    switch (compChoiceNum) {
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

    if (result === "Win!") {
        playerScore();
    } else if (result === "Loss!") {
        compScore();
    } else if (result === "Draw!") {
        playerScore();
        compScore();
    }
    else {
        console.log("error");
    }
    showPlayerScore(playerChoice);
    showCompScore(compChoice);
    result = "";
}

function showPlayerScore(playerChoice) {
    document.getElementById("players-choice").innerHTML = `<button class="btn ${playerChoice.toLowerCase()}"><i class="far fa-hand-${playerChoice.toLowerCase()}"></i></button>`;
}

function showCompScore(compChoice) {
    document.getElementById("comp-choice").innerHTML = `<button class="btn ${compChoice.toLowerCase()}"><i class="far fa-hand-${compChoice.toLowerCase()}"></i></button>`;
}

/**
 * Score Function
 */
function playerScore() {

    let zeroScore = parseInt(document.getElementById("wins").innerText);
    document.getElementById("wins").innerText = ++zeroScore;
}

function compScore() {

    let zeroScore = parseInt(document.getElementById("losses").innerText);
    document.getElementById("losses").innerText = ++zeroScore;
}

/**
 * Reset Function
 */
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', function () {
    reset();
});
function reset() {
    document.getElementById("wins").innerText = "0";
    document.getElementById("losses").innerText = "0";
    document.getElementById("players-choice").innerHTML = "";
    document.getElementById("comp-choice").innerHTML = "";
}

/**
 * Modal
 */

// Get the modal
var modal = document.getElementById("rulesModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};