//GLOBAL VARIABLES (this makes every function access your values)
    //  ====================================
//1. Create your array of words
    var wordsList = ['pepsi', 'vaporwave', 'capitalism', 'nineties', 'simpsons'];
//2. Create your variable for the word computer chooses. Which is the solution.
    var chosenWord = ""
//3. Now you need to create a variable that breaks your word into individual letter that can be places in an array.
    var lettersInChosenWord = [];
//4. Crate a variable for the blank spaces in the number of letters
//Why does is have to be blank?
    var blanks = 0;
//5. This will be the variable that reveals a mix of blank and solves letters.
    var blanksAndSuccesses = [];
//6. A variable for the wrong guesses
    var wrongGuesses = [];

//7. Lastly, you create the variable that logs in the wins,losses, and letters left
    var winsCounter = 0;
    var lossesCounter = 0;
    var numGuesses = 9; //Nine because that is the limit you set for the game

//FUNCTIONS (This is the code that you will call upon to run when needed.)
    //  =================
//1. Create a function to start and restart the game. Define the function first!
function startGame(){
    numGuesses = 9; //This will also be used for when you reset the game
  
    //Time to make the computer choose a word from your array
    chosenWord = wordsList[Math.floor(Math.random()*wordsList.length)];

    //Function chooses a word, now it breaks the word to its letters
    lettersInChosenWord = chosenWord.split();

    //This code will count the number of letters in the word chosen.
    numBlanks = lettersInChosenWord.length;

    //Print the solution in the console for testing.
    console.log(chosenWord);

//IMPORTANT! This code will *reset* the guess and success array at each round.
//IMPORTANT! This code will *reset* the wrong guesses from the previous round.
}