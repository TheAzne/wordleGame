import express from "express";
import { engine } from "express-handlebars";
import cors from "cors";
import { fetchWord } from "./randomWord.js";

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

app.get("/api/word/:length/:allowRepeats", async (req, res) => {
  const word = await fetchWord(req.params.length, req.params.allowRepeats);
  res.json({ word });
});

export default app;
