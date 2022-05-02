'use strict';

const btns = document.querySelectorAll("input");
const body = document.querySelector('body');
const container = document.querySelector('.container');
const round = document.createElement('div');
const reset = document.querySelector('.reset');
const choices = document.querySelector('.choices');
const popup = document.querySelector('#popup');
const popupContent = document.querySelector('.popup__content');
const popupTitle = document.querySelector('.popup__title');
const popupCloseIcon = document.querySelector('.close-popup');

let userField = document.querySelector('#user span');
let computerField = document.querySelector('#computer span');

let user = 0;
let computer = 0;

let unlock = true;

const timeout = 800;

function computerPlay () {
    const choice = Math.floor(Math.random() * 3);
    const options = ['rock', 'paper', 'scissors'];
    return options[choice];
}

function game(e) {
    return playRound(e.target.name, computerPlay());
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) round.textContent = 'Draw!';

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++user;
        userField.innerHTML = user;
        round.textContent = 'You Win! Rock beats Scissors'
    } 
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++user;
        userField.innerHTML = user;
        round.textContent = 'You Win! Scissors beats Paper'
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++user;
        userField.innerHTML = user;
        round.textContent = 'You Win! Paper beats Rock'
    } 

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computer;
        computerField.innerHTML = computer;
        round.textContent = 'You Lose! Paper beats Rock'
    } 
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computer;
        computerField.innerHTML = computer;
        round.textContent = 'You Lose! Rock beats Scissors'
    } 
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        ++computer;
        computerField.innerHTML = computer;
        round.textContent = 'You Lose! Scissors beats Paper'
    } 

    round.classList.add('round');
    choices.insertAdjacentElement('afterend', round);

    if (user === 5 || computer === 5) {
        declareWinner();
    } 
}

function declareWinner() {
    if (user > computer) {
        popupTitle.textContent = 'User wins!'
        reset.textContent = 'Play again';
    } 
    else {
        popupTitle.textContent = 'Computer wins!';
        reset.textContent = 'Try again';
    } 
    popupContent.appendChild(popupTitle);
    popupContent.appendChild(reset);
    btns.forEach(btn => {
        btn.removeEventListener('click', game);
    });
    popupOpen(popup);
}

function refreshPage(){
    window.location.reload();
}

function userClick (e) {
    let target = e.target;
    target.style.cssText = `
        transform: scale(0.95, 0.95);
    `;
    setTimeout(() => {
        target.style.cssText = `
            transform: scale(1, 1);
        `;
    },200);
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		}
		else {
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener("click", function(e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose (popupActive) {
	popupActive.classList.remove('open');
}

btns.forEach(btn => {
    btn.addEventListener('click', game);
    btn.addEventListener('click', userClick)
});

popupCloseIcon.addEventListener('click', function (e) {
    popupClose(popupCloseIcon.closest('.popup'));
    e.preventDefault();
});  

document.addEventListener('keydown', function(e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});
 
reset.onclick = refreshPage;
