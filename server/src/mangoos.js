import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://azne:hejhejhej123@cluster0.ijatt.mongodb.net/wordle_game?retryWrites=true&w=majority"
),
  () => console.log("MongoDB alive");

const Schema = mongoose.Schema;

const HighscoreSchema = new Schema({
  length: Number,
  allowRepeats: Boolean,
  name: String,
  startTime: Date,
  endTime: Date,
  guesses: Number,
  word: String,
});

const UseHighscore = mongoose.model("highscore", HighscoreSchema);

export default UseHighscore;
