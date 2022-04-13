import SetupHome from './SetupHome';
import Nav from './Nav';
const GameConfig = ({
  setGameState,
  handleSubmitConfig,
  unique,
  setUnique,
  wordLength,
  setWordLength,
}) => {
  return (
    <>
      <h1>Johan Ekström's version of Wordle</h1>
      <Nav />
      <SetupHome
        setGameState={setGameState}
        handleSubmitConfig={handleSubmitConfig}
        unique={unique}
        setUnique={setUnique}
        wordLength={wordLength}
        setWordLength={setWordLength}
      />
    </>
  );
};

export default GameConfig;