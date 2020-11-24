function getMoveName(randomNumber) {
	if (randomNumber == 1) {
		return 'kamień';
	} else if (randomNumber == 2) {
		return 'papier';
	} else if (randomNumber == 3) {
		return 'nożyce';
	}
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if (randomNumber == 1){
	computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove = 'papier';
} else if (randomNumber == 3) {
	computerMove = 'nożyce';
}
*/
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if (playerInput == '1') {
	playerMove = 'kamień';
} else if (playerInput == '2') {
	playerMove = 'papier';
} else if (playerInput == '3') {
	playerMove = 'nożyce';
}
*/
printMessage('Twój ruch to: ' + playerMove);

function displayResult(ComputerMove, PlayerMove) {

	if (computerMove == 'kamień' && playerMove == 'papier') {
		printMessage('Ty wygrywasz!');
	} else if (computerMove == 'papier' && playerMove == 'kamień') {
		printMessage('komputer wygrywa!');
	}
	if (computerMove == 'nożyce' && playerMove == 'kamień') {
		printMessage('Ty wygrywasz!');
	} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
		printMessage('komputer wygrywa!');
	}
	if (computerMove == 'papier' && playerMove == 'nożyce') {
		printMessage('Ty wygrywasz!');
	} else if (computerMove == 'nożyce' && playerMove == 'papier') {
		printMessage('komputer wygrywa!');
	}
	if (computerMove == 'kamień' && playerMove == 'kamień') {
		printMessage('Remis');
	}
	if (computerMove == 'papier' && playerMove == 'papier') {
		printMessage('Remis');
	}
	if (computerMove == 'nożyce' && playerMove == 'nożyce') {
		printMessage('Remis');
	}
}
displayResult()
