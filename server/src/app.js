import express from "express";
import { engine } from "express-handlebars";
import cors from "cors";
import { fetchWord } from "./randomWord.js";


const app = express();
app.use(express.static('public', {
    extensions: ['html']
}))


app.use(cors());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get("/api/word/:length/:allowRepeats", async (req, res) => {
    const unique = req.params.length;
    const repeat = req.params.allowRepeats;
    const word = await fetchWord(unique, repeat);
    res.json({ word });
});

// app.get('/api/word/', async (req, res) => {
//     const unique = req.query.unique === 'true';
//     const wordLength = parseInt(req.query.length);
//     const word = await fetchRandomWord(wordLength, unique);
//     res.json({ word });
//   });


// app.get('/api/word/', async (req, res) => {
//     const unique = req.query.unique === 'true';
//     const wordLength = parseInt(req.query.length);
//     const word = await fetchRandomWord(wordLength, unique);
//     res.json({ word });
//   });







export default app;
