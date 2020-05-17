// Create an array of words-- randomly choose one on init
var wordList = ['nepal', 'usa', 'canada', 'japan', 'uk','china', 'korea','france','italy','australia','mexico']

// declare global variables
// word stores the word being guessed
var word="";
var counterGuess = 0;
var maximumGuesses = 12;
var numWins = 0;
var numLosses = 0;
var answerArray = [];
var guessedAlready = [];


// var alreadyRanInitFunction = 0;

//Game functions starts here

const initFunction = function init() {
	document.removeEventListener('keyup', initFunction);// listens to key pressed by user and calls init()
	document.getElementById("guess").value = "";
  /// Pick a random word from the wordList
	word = wordList[Math.floor(Math.random() * wordList.length)];
  // Setup Array
	answerArray = [];
	for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
  }
	// alreadyRanInitFunction = 1;
  // document.getElementById("answer").innerHTML = "Play Game Now!"
  document.getElementById("answer").innerHTML= answerArray.join(" ");
  document.getElementById("message").innerHTML= "Type a letter then press 'Guess Letter', or press 'Quit' to stop playing."
	// document.getElementById("themeSound").innerHTML;
}

	document.addEventListener('keyup', initFunction);// listens to key pressed by user and calls init()

// document.addEventListener('keyup', initFunction);// listens to key pressed by user and calls init()

// Get a guess from the player
function guessOne() {
	var guess = document.getElementById("guess").value;
	var showThisMessage = "";
	if (guess.length !== 1) {
		showThisMessage ="Please enter only a single letter";
	}
	else {
		// Update the game with the guess
    counterGuess=counterGuess+1;
		guessedAlready.push(guess)
		for (var i = 0; i < word.length; i++) {
			if (word[i]===guess) {
				answerArray[i] = guess;
				showThisMessage = "YES! "+guess+" is in the answer";
			}
		}
		var remaining_letters=0;
		for (i = 0; i < word.length; i++) {
			if (answerArray[i] === '_') {
					remaining_letters += 1;
			}
		}
		if (remaining_letters == 0) {
			showThisMessage = "YES! You guessed the word";
			numWins = numWins+1;
			init();
		}
		if (showThisMessage === "") {
			showThisMessage = "Sorry, no "+guess;
		}
		////Update the puzzle
		document.getElementById("answer").innerHTML = answerArray.join(" ");
		// count the number of times user enter guesses
		// counterGuess=counterGuess+1;
		if (counterGuess >= maximumGuesses) {
			showThisMessage = "Sorry, you guessed " + maximumGuesses +". Load a new game.";
			numLosses = numLosses + 1;
			init();
		}


	}
	document.getElementById("message").innerHTML = showThisMessage;
	document.getElementById("guess").value = "";

	document.getElementById("wins").innerHTML = numWins;
	document.getElementById("loss").innerHTML = numLosses;
	document.getElementById("remaining").innerHTML = maximumGuesses - counterGuess;
	document.getElementById("guessedAlready").innerHTML = guessedAlready;

}
function quit() {
	document.getElementById("message").innerHTML = "The word was "+word;
	for (var j = 0; j < word.length; j++) {
		answerArray[j] = word[j];
	}
	// Solve the puzzle
	document.getElementById("answer").innerHTML = answerArray.join(" ");
}
