import express from "express";
import { engine } from "express-handlebars";
import cors from "cors";
import { fetchWord } from "./randomWord.js";
import { loadHighscores, saveHighscore  } from "./highscore.js";

const app = express();
app.use(
  express.static("public", {
    extensions: ["html"],
  })
);
app.use(cors());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");


app.get("/api/word", async (req, res) => {
  const allowRepeats = req.query.allowRepeats === 'true';
  const wordLength = parseInt(req.query.length);
  const word = await fetchWord(wordLength, allowRepeats);
  res.json({ word });
});


app.post("/api/highscores", async (req, res) => {
    const highscore = await saveHighscore(req.body);
    res.status(201).json({ highscore });
  });
  
  app.get("/api/highscores", async (req, res) => {
    const highscores = await loadHighscores();
    res.json({
      highscores: highscores.map((entry) => ({
        ...entry,
        duration: new Date(entry.endTime) - new Date(entry.startTime),
      })),
    });
  });




export default app;
