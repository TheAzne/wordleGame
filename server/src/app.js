import express from "express";
import { engine } from "express-handlebars";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { fetchWord } from "./utils/randomWord.js";
import UseHighscore from "./mangoos.js";

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
  const unique = req.query.allowRepeats == "true" ;
  const wordLength = parseInt(req.query.length);
  const word = await fetchWord(wordLength, unique);
  res.status(200).json(word);
});

app.post("/api/highscores", async (req, res) => {
  const highscore = {
    length: req.body.length,
    allowRepeats: req.body.allowRepeats,
    name: req.body.name,
    time: req.body.time,
    guesses: req.body.guesses,
    date: req.body.date,
  };
  const sendScore = new UseHighscore(highscore);
  await sendScore.save();
  res.status(200).json(req.body);
});


app.get("/api/highscore", async (req, res) => {
  const wordLength = parseInt(req.query.length);
  const highscores = await UseHighscore.find();
  const unique = req.query.allowRepeats === "true";

  const filterHighscore = highscores.filter((gh) => {
    if (wordLength && gh.wordLength != wordLength) {
      return false;
    }
    if (unique == "true" && !gh.unique) {
      return false;
    } else if (unique == "false" && gh.unique) {
      return false;
    }
    return true;
  });
  res.render("highscore", {
    highscores: filterHighscore.map((gh) => ({
      name: gh.name,
      wordLength: gh.wordLength,
      unique: gh.unique,
      duration: (gh.endTime.getTime() - gh.startTime.getTime()) / 1000,
    })),
  });
});

app.post("/api/highscores", async (req, res) => {
  const SendHighscore = {
    name: req.body.name,
    guesses: req.body.guesses,
    time: req.body.time,
    length: req.body.length,
    allowRepeats: req.body.unique,
    date: req.body.date,
  };
  const UseHighscores = new UseHighscore(SendHighscore);
  await UseHighscores.save();
  res.status(201).json(req.body);
});

export default app;

