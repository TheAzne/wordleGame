import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://azne:hejhejhej123@cluster0.ijatt.mongodb.net/wordle_game?retryWrites=true&w=majority"
),
  () => console.log("MongoDB alive");




  const Schema = mongoose.Schema;
  
  const HighscoreSchema = new Schema ({
    //length:Number,
    //allowRepeats: Boolean,
    name:String,
    // time:Number,
    // guess: Number,
    // Date: String,
  })
  
  const SendHighscore = mongoose.model('highscore',HighscoreSchema );
  
  export default SendHighscore;
  
  
  


// const Highscore = mongoose.model('highscores', {
//     userId: {
//         type: String,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     playTime: {
//         type: String,
//         required: true
//     },
//     timer: {
//         type: Number,
//         required: true,
//     },
//     guesses: {
//         type: Number,
//         required: true
//     },
//     wordLength: {
//         type: Number,
//         required: true
//     },
//     wordType: {
//         type: String,
//         required: true
//     },
//     correctWord: {
//         type: String,
//         required: true
//     }
// });

// export {
//     Highscore
// };


