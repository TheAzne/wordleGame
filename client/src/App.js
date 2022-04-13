import React from "react";
import './App.css';
import GameTime from "./components/SetupGame/GameTime";
import { useEffect, useState } from "react";
import SetupHome from "./components/SetupGame/SetupHome";
import comparing from "./comparing"
function App() {
  const [gameState, setGameState] = useState("config");
  const [correctWord, setCorrectWord] = useState('');
  const [guessWord, setGuessWord] = useState([]);
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [wordLength, setWordLength] = useState(5);
  const [unique, setUnique] = useState(false);
  
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

 const handleSubmitConfig = async (allowRepeats, length)=>{
    const res = await fetch("http://localhost:5080/api/word");
    const payload = res.json();
    setCorrectWord(payload.word);
    setGameState("Play");
    setGuessWord([]);
    setStart(true);
    return;
 }
  
 const checkGuess = (guessedWord) => {
  setGuessWord([...guessWord, comparing(guessedWord, correctWord)]);

  if (guessedWord === correctWord) {
    setStart(false);
    setGameState('won');
  }
};
 return gameState === "config" ? (
    <div className="App">
      <SetupHome
     wordLength={wordLength}
     setWordLength={setWordLength}
     unique={unique}
     setUnique={setUnique}
     setGameState={setGameState}
     handleSubmitConfig={handleSubmitConfig}
      />
    </div>
  ) : (
    <div className="App">
      <GameTime 
       correctWord={correctWord}
       start={start}
       setTime={setTime}
       time={time}
       checkGuess={checkGuess}
       guessWord={guessWord}
       gameState={gameState}
       setGameState={setGameState}
       wordLength={wordLength}
       unique={unique}/>
    </div>
  );
}

export default App;