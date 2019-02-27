//Create an array of words for the game
var choices = ['pepsi', 'aesthetic', 'capitalism'];
//Computer chooses a random word from array
var randomWord = Math.floor(Math.random() * choices.length);
var vaporWord = choices[randomWord];
var underScore = [];
console.log(vaporWord);
//Create underscores based on length of the word
var underscoreMaker = () => {
    for (var i = 0; i < vaporWord.length; i++) {
        underScore.push("_");
    }
    console.log(underScore);
    return underScore;
}

// Call the function!!! State the name and open/close parenthesis.

//Gets Users guess

document.onkeyup = function (event) {
    var userPress = event.key;
    //Check if guess is right
    if (userPress === underScore) {
        //Push the right array and tally the letters
    }
    //If right, push the right array
    //If wrong, push to wrong array 
};
