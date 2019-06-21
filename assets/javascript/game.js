// Giant wordGuessGame object to store all logic and variables
const wordGuessGame = {
    wordsToPick: {
        Drake : {
            picture: '#',
            song: '#',
            preview: '#'
        },
        Future : {
            picture: '#',
            song: '#',
            preview: '#'
        }
    },
// Variables for the initial state of our game
    wordInPlay: null,
    lettersOfWord: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,

// call the setupGame method upon initial page load
    setupGame: () => {
        // Pick a random word
        const objKeys = Object.keys(this.wordsToPick);
        this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

        // Split the chosen word into individual letters then 
        this.lettersOfWord = this.wordInPlay.splt("");
        this.rebuildWordView(); 
        this.processUpdateTotalGuesses();
    },

// run a function for every guess the user makes and changes the letters
    updatePage: (letter) => {
        if (this.guessesLeft === 0) {
            this.restartGame()
        }
        else {
            this.updateGuesses(letter);
            this.updateMatchedLetters(letter);
            this.rebuildWordView();
            if(this.updateWins() === true) {
                this.restartGame();
            }
        }
    },

// function for what happens when the user makes an incorrect guess
    updateGuesses: (letter) => {
        if((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfWord.indexOf(letter) === -1)) {
            this.guessedLetters.push(letter);
            this.guessesLeft--;

            document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;
            document. querySelector('#guessed-letters').innerHTML = this.guessedLetters.join(', ');
        }
    },

// function sets the initial guesses the user gets
    processUpdateTotalGuesses: () => {
        this.totalGuesses = this.lettersOfWord.length + 5; 
        this.guessesLeft = this.totalGuesses;
        document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;
    },

// function governs what happens if the user makes a successful guess
    updateMatchedLetters: (letter) => {
        for (let i = 0; i < this.lettersOfWord.length; i++) {
            if ((letter === this.lettersOfWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                this.matchedLetters.push(letter);
            }
        }
    },

// function to build the display of the word that is currently being guessed by each letter
    rebuildWordView: () => {
        let wordView = '';
        for (let i = 0; i < lettersOfWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfWord[i]) !== -1) {
                wordView += this.lettersOfWord[i];
            }
            else {
                wordView += '&nbsp;_&nbsp;'; //&nbsp is HTML entity to show a space w/o break into a new line
            }
        }
        // Update the page with the new string
        document.querySelector('#current-word').innerHTML = wordView;
    },

// function to restart the game by resetting all of the variables
    restartGame: () => {
        document.querySelector('#guessed-letters').innerHTML = '';
        this.wordInPlay = null;
        this.lettersOfWord = null;
        this.matchedLetters = [];
        this.guessedLetters = [];
        this.guessesLeft = 0;
        this.totalGuesses = 0;
        this.letterGuessed = null;
        this.setupGame();
        this.rebuildWordView();
    },

// function to check on user wins
    updateWins: () => {
        let win;

        if (this.matchedLetters.length === 0) {
            win = false;
        }
        else {
            win = true;
        }

        //if you haven't guess all the letters in the word, you don't win yet 
        for (let i = 0; i < this.lettersOfWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfWord[i]) === -1) {
                win = false;
            }
        }

        if (win) {
            this.wins = this.wins++;
            document.querySelector('#wins').innerHTML = this.wins;
            //document.querySelector('#music').innerHTML = this.wordsToPick[this.wordInPlay].song + "By" + this.wordInPlay;
            document.querySelector('#band-div').innerHTML = `<img class='band-image' src='../images/'${this.wordsToPick[this.wordInPlay].picture}' alt='${this.wordsToPick[this.wordInPlay].song}'>`;
            
            return true;
        }

        return false;
    }
};

// Initialize the game when the page loads
wordGuessGame.setupGame();

// Add user-game functionality to key events
document.onkeyup = (event) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        wordGuessGame.letterGuessed = event.key.toLowerCase();
        wordGuessGame.updatePage(wordGuessGame.letterGuessed);
    }
}