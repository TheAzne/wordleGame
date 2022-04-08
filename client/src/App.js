import { useEffect, useState } from "react";
import "./static/App.css";
import Game from "./components/game";
// import configGame from "./components/configGame";

function App() {
  const [correctWord, setCorrectWord] = useState(null);
  const [gameState, setGameState] = useState('');
  const [lengthOfWord, setLengthOfWord] = useState(5);
  const [repeatChar, setRepeatChar] = useState('false');
  const [start, setStart] = useState('false');
  const [guessWord, setGuessWord] = useState([]);




  const playerSubmit = async (length, allowRepeats) =>{
    const res = await fetch(`http://localhost:6090/api/word?length=${length}&allowRepeats=${allowRepeats}`)
    console.log(res);
    const data = await res.json();
     setCorrectWord(data.word);
     setGameState('Play');
     setStart(true);
     setGuessWord([]);
     return;
  };

 return gameState === 'config' ? (
   <div className="App">
     <configGame
     lengthOfWord={lengthOfWord}
     setLengthOfWord={setLengthOfWord}
     repeatChar={repeatChar}
     setRepeatChar={setRepeatChar}
     setGameState={setGameState}
     playerSubmit={playerSubmit}
    />
   </div>
 ) :(
  <div className="App">
  <Game
    correctWord={correctWord}
    start={start}
    // setTime={setTime}
    // time={time}
    // checkGuess={checkGuess}
    guessWord={guessWord}
    gameState={gameState}
    setGameState={setGameState}
    lengthOfWord={lengthOfWord}
    repeatChar={repeatChar}
  />
  <p>{correctWord}</p>
  <p>{guessWord.length}</p>
</div>
 )


}

export default App;
