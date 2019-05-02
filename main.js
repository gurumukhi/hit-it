// Constants
const TOTAL_TIME_SECS = 30;
const GAMEZONE_LENGTH_PX = 800;
const BALL_RADIUS_PX = 50;
const MAX_RANDOM_NUMBER = GAMEZONE_LENGTH_PX - BALL_RADIUS_PX * 2;
const CIRCLE_COLOR_DEFAULT = 'yellowgreen';
const CIRCLE_COLOR_HIT = 'red';

// Variables
let currentTime = 0;
let currentScore = 0;
let currentSpeed = 1;   // might decrease with increment in level
let circle = document.querySelector('#circle');
let scoreSpan = document.querySelector('#scoreSpan');
let timeSpan = document.querySelector('#timeSpan');
let timer1, timer2;

const randomNumber = (max) => {
	return Math.random() * max;
}

const init = () => {
	circle.addEventListener('click', () => {
		if (circle.style.background === CIRCLE_COLOR_DEFAULT) {
			circle.style.background = CIRCLE_COLOR_HIT;
			 scoreSpan.innerHTML = ++currentScore;
		}
	});
	repositionCircle();
	timer2 = setInterval(increaseTime, 1000);
}

const increaseTime = () => {
	timeSpan.innerHTML = ++currentTime;
}

const repositionCircle = () => {
	if (currentTime === 10) {
		currentSpeed = 0.8;
	} else if (currentTime === 20) {
		currentSpeed = 0.6;
	}
	if (currentTime === TOTAL_TIME_SECS) {
		clearInterval(timer1);
		clearInterval(timer2);
		document.querySelector('.gameOver').hidden = false;
		return;
	}
	circle.style.left = `${randomNumber(MAX_RANDOM_NUMBER)}px`;
	circle.style.top = `${randomNumber(MAX_RANDOM_NUMBER)}px`;
	circle.style.background = CIRCLE_COLOR_DEFAULT;
	setTimeout(repositionCircle, 1000 * currentSpeed);
}

// Initialize game
init();
