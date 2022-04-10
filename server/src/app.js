import express from "express";
import { engine } from "express-handlebars";
import cors from "cors";
import { fetchWord } from "./randomWord.js";
import  SendHighscore  from "./mangoos.js";

const app = express();
app.use(
  express.static("public", {
    extensions: ["html"],
  })
);
app.use(cors());
app.use(express.json());
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./server/views");

app.get("/api/word", async (req, res) => {
  const repeats = req.query.allowRepeats === "true";
  const wordLength = parseInt(req.query.length);

  const word = await fetchWord(wordLength, repeats);
  res.json({ word });
  console.log(word,'jelloeoe');
});

app.post("/api/highscores", async (req, res) => {
  const highscore = new SendHighscore({
    // length: req.body.length,
    // allowRepeats: req.body.allowRepeats,
    name: req.body.name,
    // time: req.body.time,
    // guess: req.body.guess,
    // date: req.body.date
  });
  await highscore.save();
  const scores = await SendHighscore.find();
  console.log(scores, 'earwaerawer')
  res.status(200).json(req.body);

});

// app.get('/api/highscores', (req, res) => {
//   console.log(req.head)
//   res.send('helloo')
// })
// app.get("/api/highscore", async (req, res) => {
//   const highscores = await sendHighscore.find();
//   highscores = highscores.sort((a,b)=> a.time - b.time);
//   const highscoreList = highscores.map((entry) => ({
//     name: entry.name,
//     guess:entry.guess,
//     timeSeconds: ('0' + Math.floor((entry.time / 1000) % 60)).slice(-2),
//     timeMinutes: ('0' + Math.floor((entry.time / 60000) % 60)).slice(-2),
//     length: entry.length,
//     allowRepeats: entry.allowRepeats,
//     data: entry.data,
//   }));
//   res.render('highscore', {highscoreList})
// });

export default app;

// [
//   {letter: 'w', result:'incorrect'},
//   {letter: 'o', result:'incorrect'},
//   {letter: 'r', result:'incorrect'},
//   { letter: 'd', result: 'incorrect' },
// ]

// const [guesses, setGuesses] = useState([])

// setGuesses([...guesses, compare(gissning )])
// console.log(guesses.length)
// const map = guesses.map((item) => {
//   return <li className={item.result}>{item.letter}</li>
// })


//  .incorrect {
//     background-color: red;
// }

// .correct {
//   background-color: green;
// }



/* 
1.Rendera ut bokstäverna med rätt färg
  A. Rendera ut nånting?
  B. Kör varje ord i comparefunktionen
  C. Placera dom i ditt state
  D. Rendera ut allting från ditt state
*/

