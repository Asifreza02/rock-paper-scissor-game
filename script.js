
function initialScore() {
     score = {
        Win: 0,
        Lose: 0,
        Tie: 0
    };
    let updateScoreElem = document.querySelector('.js-score');

// let score = JSON.parse(localStorage.getItem('score'));

updateScoreElem.innerHTML = `Wins: ${score.Win}, Lose: ${score.Lose}, Tie: ${score.Tie}`

    // localStorage.setItem('score', JSON.stringify(score));
}
let score = {
    Win: 0,
    Lose: 0,
    Tie: 0
}

let result = '';
var jscore=document.querySelector('.js-score')

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = "Tie.";
            
        }
        else if (computerMove === 'paper') {
            result = " You lose.";
        }
        else {
            result = "You win.";
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        }
        else if (computerMove === 'paper') {
            result = 'Tie.';
        }
        else {
            result = 'You lose.';
        }
    }
    else if (playerMove === 'scissor') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        }
        else if (computerMove === 'paper') {
            result = 'You win.';
        }
        else {
            result = 'Tie';
        }
    }

    const displayResult = document.querySelector('.js-result');

    displayResult.innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. The result is ${result}`

    if (result === "Tie.") {
        score.Tie ++;
        console.log(score.Tie);
    }
    else if (result === "You win.") {
        score.Win++;
    }
    else {
        score.Lose++;
    }
    // localStorage.setItem('score', JSON.stringify(score));
    let updateScoreElem = document.querySelector('.js-score');

// let score = JSON.parse(localStorage.getItem('score'));

updateScoreElem.innerHTML = `Wins: ${score.Win}, Lose: ${score.Lose}, Tie: ${score.Tie}`
}

    


function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
    }
    else {
        computerMove = "scissor";
    }
    return computerMove;
}