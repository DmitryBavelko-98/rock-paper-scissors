'use strict';

let user = 0;
let computer = 0;

function computerPlay () {
    
    const choice = Math.floor(Math.random() * 3);

    const options = ['rock', 'paper', 'scissors'];

    return options[choice];
}

function playRound(playerSelection, computerSelection) {

    const selection = playerSelection.toLowerCase();

    if (selection === computerSelection) return 'Draw!';

    else if (selection === 'rock' && computerSelection === 'scissors') {
        user++;
        return 'You Win! Rock beats Scissors'
    } 
    else if (selection === 'scissors' && computerSelection === 'paper') {
        user++;
        return 'You Win! Scissors beats Paper'
    } 
    else if (selection === 'paper' && computerSelection === 'rock') {
        user++;
        return 'You Win! Paper beats Rock'
    } 

    else if (selection === 'rock' && computerSelection === 'paper') {
        computer++;
        return 'You Lose! Paper beats Rock'
    } 
    else if (selection === 'scissors' && computerSelection === 'rock') {
        computer++;
        return 'You Lose! Rock beats Scissors'
    } 
    else if (selection === 'paper' && computerSelection === 'scissors') {
        computer++;
        return 'You Lose! Scissors beats Paper'
    } 
}

function declareWinner() {
    if (computer === user) return 'Draw!';
    return user > computer ? 'User wins!' : 'Computer wins!'
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your figure!', '');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(declareWinner());
}

game();



  
 

