var letters = ["a", "b", "c", "d", "e", "f"];

// create array that will hold what we guess
// here

// This variable will be randomly assigned one of the three letters
//here

// This is what we'll use to count down ie. guesses left
// here

// This is the counter for wins/losses variables
// here

// Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar

var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
  // (i.e. guessesLeft will get displayed in HTML)
};

var updateLetterToGuess = function() {
  // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, c, d, e or f)
};

var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas.
};

// Function will be called when we reset everything
var reset = function() {
  // set variables back to their initial state ie. guesses left or guessed letters
  //here
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

// Execute on page load.
updateLetterToGuess();
updateGuessesLeft();

// This function will capture the keyboard clicks.
document.onkeydown = function(event) {

  // It's going to reduce the guesses by one
  //code to reduce guesses left variable here

  // store and Lowercase the letter of user input in a variable
  //here

  // Then add the guess to the guessedLetters array using the push method
  //here

  // Then its going to run the update functions
  updateGuessesLeft();
  updateGuessesSoFar();

  // We'll check if there's a match.
  //evaluate using if statements weather it is a win or a loss and remember to reset your game for a new one

};