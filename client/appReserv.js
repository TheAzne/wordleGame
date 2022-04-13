import { useEffect, useState } from "react";
import "./compFail/static/App.css";
import Game from "./compFail/Game";
import ConfigGame from "./compFail/ConfigGame";
import comparing from "./comparing";

function App() {
  const [correctWord, setCorrectWord] = useState('');
  const [gameState, setGameState] = useState('config');
  const [lengthOfWord, setLengthOfWord] = useState(5);
  const [repeatChar, setRepeatChar] = useState(false);
  const [start, setStart] = useState(false);
  const [guessWord, setGuessWord] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  const playerSubmit = async (length, allowRepeats) => {
    const res = await fetch(
      `http://localhost:6090/api/word?length=${length}&allowRepeats=${allowRepeats}`
    );
    const data = await res.json();
    setCorrectWord(data.word);
    setGameState("Play");
    setStart(true);
    setGuessWord([]);
    return;
  };

  const checkGuess = (guessedWord) => {
    setGuessWord([...guessWord, comparing(guessedWord, correctWord)]);

    if (guessedWord === correctWord) {
      setStart(false);
      setGameState("You won!");
    }
  };
  return gameState === "config" ? (
    <div className="App">
      <ConfigGame
        lengthOfWord={lengthOfWord}
        setLengthOfWord={setLengthOfWord}
        repeatChar={repeatChar}
        setRepeatChar={setRepeatChar}
        setGameState={setGameState}
        playerSubmit={playerSubmit}
      />
    </div>
  ) : (
    <div className="App">
      <Game
        correctWord={correctWord}
        start={start}
        setTime={setTime}
        time={time}
        checkGuess={checkGuess}
        guessWord={guessWord}
        gameState={gameState}
        setGameState={setGameState}
        lengthOfWord={lengthOfWord}
        repeatChar={repeatChar}
      />
      <p>{correctWord}</p>
      <p>{guessWord.length}</p>
    </div>
  );
}

export default App;
