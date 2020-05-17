
// Create an array of words-- randomly choose one on init
var wordList = ['nepal', 'usa', 'canada'];
alert('Press any key to get started!')

// declare three global variables
// word stores the word being guessed
var word="";
var answerArray = [];
var counterGuess = 0;
var maximumGuesses = 7;


//Game functions starts
function init(){
counterGuess = 0;
	// Pick a random word from the wordList
	word = wordList[Math.floor(Math.random() * wordList.length)];

  // Set up the answer array
	answerArray = [];
	for (var i = 0; i < word.length; i++) {
	  answerArray[i] = "_";
    // console.log(answerArray);
	}

  document.getElementById("answer").innerHTML= answerArray.join(" ");
	document.getElementById("message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
}
init();

function guessOne() {
	// Get a guess from the player
	var guess = document.getElementById("guess").value;
	var showThisMessage = "";
    if (guess.length !== 1) {
		showThisMessage ="Please enter only a single letter";
	} else {
		// Update the game with the guess
    counterGuess=counterGuess+1;

		for (var i = 0; i < word.length; i++) {
			if (word[i] === guess) {
				answerArray[i] = guess;
				showThisMessage = "YES! "+guess+" is in the answer";
			}

		}

		var remaining_letters = 0;
		// recount the remaining letters
		for (i = 0; i < word.length; i++) {
			if (answerArray[i] === '_') {
			    remaining_letters += 1;
			}
		}
		if (remaining_letters == 0) {
			showThisMessage = "YES! You guessed the word";
		}

		if (showThisMessage === "") {
			showThisMessage = "Sorry, no "+guess;
		}

		// Update the puzzle
		document.getElementById("answer").innerHTML = answerArray.join(" ");
    // count the number of times user enter guesses
    // counterGuess=counterGuess+1;

    if (counterGuess >= maximumGuesses) {
      showThisMessage = "Sorry, you guessed " + maximumGuesses +". Load a new game.";
    }


		// Lend a hand by clearing out their last guess
		document.getElementById("guess").value = "";
	}
	document.getElementById("message").innerHTML = showThisMessage;
}

function quit() {
	document.getElementById("message").innerHTML = "The word was "+word;
	for (var j = 0; j < word.length; j++) {
		answerArray[j] = word[j];
	}
	// Solve the puzzle
	document.getElementById("answer").innerHTML = answerArray.join(" ");
}
