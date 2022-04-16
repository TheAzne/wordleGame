import Timer from "./Timer";
import Guesses from "./Guesses";
import GuessesRenderInput from "./GuessesRenderInput";
import HighscoreList from "./HighscoreList";
function GameTime({
  correctWord,
  time,
  checkGuess,
  guessWord,
  gameState,
  setGameState,
  setTime,
  unique,
  wordLength,
}) {
  if (gameState === "playing") {
    return (
      <div className="GameTime">
        Hello
        {
        /* <Timer /> 
        <GuessesRenderInput guessWord={guessWord} correctWord={correctWord} />
        <Guesses checkGuess={checkGuess} correctWord={correctWord} /> */}
      </div>
    );
  } else if (gameState === "Won") {
    <div>
      <Timer />
      <HighscoreList
        time={time}
        setTime={setTime}
        guessWord={guessWord}
        setGameState={setGameState}
        wordLength={wordLength}
        unique={unique}
      />
    </div>;
  }
}

export default GameTime;
