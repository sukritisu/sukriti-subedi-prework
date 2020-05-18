// an array of countries-- randomly choose one on init
var wordList = ['NEPAL', 'USA', 'CANADA', 'JAPAN', 'UK','CHINA', 'KOREA','FRANCE','ITALY','AUSTRALIA','MEXICO','GERMANY','INDIA','PAKISTAN','UKRAINE','RUSSIA','SPAIN','PORTUGAL','ZIMBABWE','UGANDA']

// declare global variables
// word stores the word being guessed
var word="";
var counterGuess = 0;
var maximumGuesses = 12;
var numWins = 0;
var numLosses = 0;
var answerArray = [];
var guessedAlready = [];



//functions starts here

function init() {

  // Pick a random word from the wordList
	word = wordList[Math.floor(Math.random() * wordList.length)];
  // Setup Array
	answerArray = [];
	guessedAlready = [];
	counterGuess = 0;
	for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
  }

	document.getElementById("answer").innerHTML= answerArray.join(" ");
}

init();


document.addEventListener('keyup', guessOne);// listens to key pressed by user and calls guessOne()

// Proceed with the game once a character key has been pressed and released
function guessOne(e) {
	// var guess = document.getElementById("guess").value;
	guess = String.fromCharCode(e.which);
	guess = guess.toUpperCase();
	var showThisMessage = "";
	if(!(guess>='A' && guess<='Z')){
		showThisMessage ="Please input a valid alphabet.";		
	}
	else if (guessedAlready.includes(guess)) {
		showThisMessage ="You've already tried this letter. <br>Enter a different one.";		
	}
	else {
		// Update the game with the guess
    	counterGuess=counterGuess+1; // increment guess counter
		guessedAlready.push(guess)
		for (var i = 0; i < word.length; i++) {
			if (word[i]===guess) {
				answerArray[i] = guess;
				showThisMessage = "Great! Letter "+guess+" is in the word.";
			}
		}
		var remaining_letters=0;
		for (i = 0; i < word.length; i++) {
			if (answerArray[i] === '_') {
					remaining_letters += 1;
			}
		}
		if (remaining_letters == 0) {
			showThisMessage = "Congrats! You guessed the word. <br>Try this country.";
			numWins = numWins+1;
			init();
		}
		if (showThisMessage === "") {
			showThisMessage = "Sorry, no "+guess+" in the answer.";
		}
		//Update the puzzle
		document.getElementById("answer").innerHTML = answerArray.join(" ");
		// count the number of times user enter guesses
		if (counterGuess >= maximumGuesses) {
			showThisMessage = "Sorry, you guessed the limit " + maximumGuesses +" times. <br> The answer was: " + word+". <br>Try this new game.";
			numLosses = numLosses + 1;
			init();
		}


	}
	document.getElementById("message").innerHTML = showThisMessage;
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
