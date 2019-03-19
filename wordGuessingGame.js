let gameState = {
    incorrectGuesses: [],
    remainingGuesses: 10
};

function setWord() {
    //set word to be guessed
    let word = words[Math.floor(Math.random() * words.length)].toLowerCase();
    let wordTiles = document.createElement("div");
    for (let letter of word) {
        wordTiles.innerHTML += `<input class="char" value="${letter}" maxlength="1" disabled>`;
    }

    for (let i = 0, numGuesses = Math.ceil(word.length / 2); i < numGuesses; i++) {
        let letters =
            Array.from(wordTiles.getElementsByClassName("char"))
            .filter(letter => letter.disabled == true);
        let guess = letters[Math.floor(Math.random() * letters.length)];
        guess.disabled = false;
        guess.className = "guess";
        guess.removeAttribute("value");
    }

    let submitBtn = document.getElementById("submit");
    submitBtn.parentNode.insertBefore(wordTiles, submitBtn);
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