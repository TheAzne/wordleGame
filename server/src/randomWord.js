
import fetch from "node-fetch";


const url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json";

export async function fetchWord(length, allowRepeats) {
  const res = await fetch(url);
  const payload = await res.json();
  const words = Object.keys(payload).filter(key => {
   if (allowRepeats && /(.).*\1/.test(key)) return;
    return key.length == length;
  });
  const wordRepeat = Object.keys(payload).filter(key => {
    if (allowRepeats == "true" && /(.).*\1/.test(key))
      return key.length == length;

  });
  return allowRepeats == "true" ? wordRepeat[Math.floor(Math.random() * wordRepeat.length)] : words[Math.floor(Math.random() * words.length)];

}





  
