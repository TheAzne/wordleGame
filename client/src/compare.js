function wordle(input, guess) {
    let word = Array.from(input).filter(function (char) { return char.match(/[a-z]/); });
    // console.log(word);
    let guessArr = Array.from(guess);
    // console.log(guessArr);
    let final = [];
    for (let i = 0; i < guessArr.length; i++) {
        // console.log("Testing: ", word[i], "against", guessArr[i]);
        if (word[i] === guessArr[i])
            final.push({ letter: guessArr[i], result: "Correct" });
        else if (word.includes(guessArr[i]))
            final.push({ letter: guessArr[i], result: "Misplaced" });
        else
            final.push({ letter: guessArr[i], result: "Incorrect" });
    }
    return final;
}

 module.exports = wordle