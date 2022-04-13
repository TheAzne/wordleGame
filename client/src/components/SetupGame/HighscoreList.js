import { useState } from 'react';
const HighscoreList = ({
  time,
  setTime,
  guessWord,
  setGameState,
  wordLength,
  unique,
}) => {
  const [inputName, setInputName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: inputName,
        guesses: guessWord.length,
        time: time,
        length: wordLength,
        unique: unique,
        date: new Date(),
      }),
    };
    const res = await fetch(
      'http://localhost:5080/api/highscores',
      req
    );
    setGameState('config');
    setTime(0);
  };
  return (
    <>
      <h1>You Won!</h1>
      <h4>You did it in {guessWord.length} guesses</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="HighscoreList"
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <br />
        <button type="submit">Submit to highscore</button>
      </form>
    </>
  );
};

export default HighscoreList;
