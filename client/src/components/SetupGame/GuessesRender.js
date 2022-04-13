const GuessesRender = (guess) => {
  return (
    <ul className="GuessesRender">
      {guess.map((letter, index) => (
        <li key={index} className={letter.result}>
          {letter.letter}
        </li>
      ))}
    </ul>
  );
};

export default GuessesRender;
