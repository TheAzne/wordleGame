import express from "express";
import { engine } from "express-handlebars";
import { threeWords } from "./randomWord.js";
import { fourWords } from "./randomWord.js";
import { fiveWords } from "./randomWord.js";
import cors from "cors";
import { threeWordsRepeat } from "./randomWord.js";
import { fourWordsRepeat } from "./randomWord.js";
import { fiveWordsRepeat } from "./randomWord.js";
import { fetchWord } from "./randomWord.js";
const app = express();
app.use(express.static('public', {
    extensions: ['html']
}))


app.use(cors());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get("/api/3words/:length/:allowRepeats", async (req, res) => {
    const word = await fetchWord(req.params.length=parseInt(req.params.length), 
    (req.query.allowRepeats === undefined || req.query.allowRepeats.toLowerCase() === 'false' ? false : true));
    console.log(parseInt(word));
    res.json({
        word,
    });
});


app.get("/api/3words", async (req, res) => {
    const word = await threeWords();
    // console.log(word);
    res.json({
        word,
    });
});

app.get("/api/4words", async (req, res) => {
    const word = await fourWords();
    // console.log(word);
    res.json({
        word,
    });
});

app.get("/api/4words/repeat", async (req, res) => {
    const word = await fourWordsRepeat();
    // console.log(word);
    res.json({
        word,
    });
});

app.get("/api/5words", async (req, res) => {
    const word = await fiveWords();
    // console.log(word);
    res.json({
        word,
    });
});

app.get("/api/5words/repeat", async (req, res) => {
    const word = await fiveWordsRepeat();
    // console.log(word);
    res.json({
        word,
    });
});

app.get("/game", (req, res) => {
    // res.render("game")
    res.json({
        name:"BIll",
        age: 99,
        
    })
})






export default app;
