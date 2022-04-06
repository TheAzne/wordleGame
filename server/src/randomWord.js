import fetch from "node-fetch";


const url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json";

// export async function oneWord() {
//     const res = await fetch(url);
//     const payload = await res.json();
//     const filterWord = Object.keys(payload).filter(key => key.length >= 3 && key.length <= 5)
//     const randomWord = Math.floor(Math.random() * filterWord.length);
//     return filterWord[randomWord];
// }

export async function fetchWord(length, allowRepeats) {
    const res = await fetch(url);
    const payload = await res.json();
    const words = Object.keys(payload).filter(key => {
      if (!allowRepeats && /(.).*\1/.test(key)) return false;
      return key.length === length;
    });
    return words[Math.floor(Math.random() * words.length)];
  }

// export async function threeWords() {
//     const res = await fetch(url);
//     const payload = await res.json();
//     const filterWord = Object.keys(payload).filter(key => key.length == 3)
//     const r
andomWord = Math.floor(Math.random() * filterWord.length);
//     return filterWord[randomWord];
// }


app.get('/api/word/', async (req, res) => {
    const unique = req.query.unique === 'true';
    const wordLength = parseInt(req.query.length);
    const word = await fetchRandomWord(wordLength, unique);
    res.json({ word });
  });

  // http://localhost:5080/api/word?unique=${unique}&length=${length}



// export async function fourWords() {
//     const res = await fetch(url);
//     const payload = await res.json();
//     const filterWord = Object.keys(payload).filter(key => key.length == 4)
//     const randomWord = Math.floor(Math.random() * filterWord.length);
//     return filterWord[randomWord];
// }

// export async function fourWordsRepeat() {
//     const res = await fetch(url);
//     const payload = await res.json();
//     const filterWord = Object.keys(payload).filter(key => key.length == 4 && /(.).*?\1/.test(key))
//     const randomWord = Math.floor(Math.random() * filterWord.length);
//     return filterWord[randomWord];
// }

// export async function fiveWords() {
//     const res = await fetch(url);
//     const payload = await res.json();
//     const filterWord = Object.keys(payload).filter(key => key.length == 5)
//     const randomWord = Math.floor(Math.random() * filterWord.length);
//     return filterWord[randomWord];
// }


// export async function fiveWordsRepeat() {
//     const res = await fetch(url);
//     const payload = await res.json();
//     const filterWord = Object.keys(payload).filter(key => key.length == 5 && /(.).*?\1/.test(key))
//     const randomWord = Math.floor(Math.random() * filterWord.length);
//     return filterWord[randomWord];
// }