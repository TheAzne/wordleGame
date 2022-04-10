function comparing(correctWord, guessWord) {
    const word = correctWord.match(/[a-z]/gi);
    const copy = guessWord.match(/[a-z]/gi);
    let final = [];
    for (let i = 0; i < guessWord.length; i++) {
        if (word[i] === guessWord[i])
            final.push({ letter: guessWord[i], result: "Correct" });
        else if (word.includes(guessWord[i])) {
            final.push({ letter: guessWord[i], result: "Misplaced" });
            const additionalCheckLetter = guessWord[i]
            const indeces = copy.map((l, cur) => {
                if(cur<=i) return -1
                if(l==copy[i]) return cur;
                return -1 
            }).filter((val) => val !== -1)
            for(let i=0; i<indeces.length; i++) {
                if(word[indeces[i]] == additionalCheckLetter) {
                    const obj = final.pop()
                    final.push({ ...obj, result: "Incorrect" });
                }
            }
        }
        else
            final.push({ letter: guessWord[i], result: "Incorrect" });
    }
    return final;
}

export default comparing;