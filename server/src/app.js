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


app.get("/api/word", async (req, res) => {
    const allowRepeats = req.query.allowRepeats === 'true';
     const wordLength = parseInt(req.query.length);
    const word = await fetchWord(wordLength, allowRepeats);
    console.log(word);
    res.json({ word });
});


// app.get('/api/word/', async (req, res) => {
//     const unique = req.query.unique === 'true';
//     const wordLength = parseInt(req.query.length);
//     const word = await fetchRandomWord(wordLength, unique);
//     res.json({ word });
//   });





app.get("/game", (req, res) => {
    // res.render("game")
    res.json({
        name:"BIll",
        age: 99,
        
    })
})






export default app;
