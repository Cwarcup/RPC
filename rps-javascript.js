
let compScore = 0;
let playerScore = 0;
let roundWinner = '';

const container = document.querySelector('#container');

const btns = document.querySelector(".btn");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const restartBtn = document.querySelector(".restart");

const playerScoreBoard = document.querySelector('#player-score');
const computerScoreBoard = document.querySelector('#computer-score');
const message = document.querySelector('#message');

const gameWinner = document.querySelector('#game-winner');


// restart the game. Make buttons playable once game has ended. 
restartBtn.addEventListener('click',  () => {
	playerScore = 0;
	compScore = 0;
	message.textContent = "";
	playerScoreBoard.textContent = "Player Score: ";
	computerScoreBoard.textContent = "Computer Score: ";
	gameWinner.textContent = "";
	document.getElementById("rock").disabled = false;
	document.getElementById("paper").disabled = false;
	document.getElementById("scissors").disabled = false;
})


//Buttons to perform action when clicked. 
// Button selects correct playerSeclection, then plays round. 
rockBtn.addEventListener('click', () => {
	const playerSelection = 'rock';
	const computerSelection = computerPlay();
	playRound(playerSelection, computerSelection);
})

paperBtn.addEventListener('click', () => {
	const playerSelection = 'paper';
	const computerSelection = computerPlay();
	playRound(playerSelection, computerSelection);
})

scissorBtn.addEventListener('click', () => {
	const playerSelection = 'scissors';
	const computerSelection = computerPlay();
	playRound(playerSelection, computerSelection);
})

//Computer selects rock, paper or scissors
function computerPlay() {
	let randomNum = Math.floor(Math.random() * 3);
	switch (randomNum) {
		case 0: 
			return 'rock'
		case 1: 
			return 'paper'
		case 2: 
			return 'scissors'
		break;
	}
}

// one round is played.
// increments player and computer score each round.
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		roundWinner = 'Tie';
	}
	else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'rock') 
		) {
		roundWinner = 'Player';
		++playerScore;
		}
	else if (
		(computerSelection === 'rock' && playerSelection === 'scissors') ||
		(computerSelection === 'scissors' && playerSelection === 'paper') ||
		(computerSelection === 'paper' && playerSelection === 'rock')
		) {
		roundWinner = 'Computer';
		++compScore;
		}
	finalScore();
}

// display final score; if player or computer score is equal to 5, declare the winner.
function finalScore() {
	playerScoreBoard.textContent = `Player Score: ${playerScore}`;
	computerScoreBoard.textContent = `Computer Score: ${compScore}`;
	message.textContent = `Round Results: ${roundWinner}`;

	if (playerScore === 5) {
		gameWinner.textContent = "Player has won the game!";
		gameOver()	
	} else if (compScore === 5) {
		gameWinner.textContent = "Computer has won the game!";
		gameOver()
	} 
}

// ends the game, making buttons unclickable. 
function gameOver() {
	document.getElementById("rock").disabled = true;
	document.getElementById("paper").disabled = true;
	document.getElementById("scissors").disabled = true;
}
