### Psychic Game Pseudocode

1. Computer chooses a random letter from alphabet

2. User presses a letter key on keyboard

3. Does the User win or lose?
    * If the letter is correct, then computer logs it as a win
    * If the letter in incorrect, then computer logs it as a guess
        - There are a max of 9 guesses per turn
    * After 9 incorrect guesses, the computer logs it as a loss
    
4. Keep track of wins/losses
    * Add one to wins if the User scores a win
    * Add one to losses if the User fails after 9 attempts

5. The user presses a letter from the keyboard to play again