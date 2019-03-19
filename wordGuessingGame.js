let gameState = {
    incorrectGuesses: [],
    remainingGuesses: 10
};

function setWord() {
    //set word to be guessed
    let word = words[Math.floor(Math.random() * words.length)].toLowerCase();
    let hiddenLetters = [];
    for (let i = 0, numHidden = Math.floor(word.length / 2); i < numHidden; i++) {
        hiddenLetters.push(Math.floor(Math.random() * word.length));
    }
    let wordTiles = "";
    for (let letter in word) {
        wordTiles += hiddenLetters.includes(parseInt(letter)) ? `<div class="guess"></div>` : `<div class="char">${word[letter]}</div>`;
    }
    document.getElementById("wordTiles").innerHTML = wordTiles;
}

function validate (guess) {
    //validate the input from the form (letter)
}
function check (guess) {
    //check if the guess is correct
}

function updateWordTiles(index) {
    //update the tiles on the HTML
}
function checkEndOfGame(){
    //check if the player has guessed the secret word or if the game is over (no more
    // remaining guesses
}
function reset () {
    //reset the game (set new word to be guessed, clean word tiles, incorrect
    // guesses and remaining guesses
}