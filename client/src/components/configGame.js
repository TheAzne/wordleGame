import configInput from "./playerChoice";
import Nav from './Nav';
const configGame = ({
    setGameState,
    playerSubmit,
    setLengthOfWord,
    lengthOfWord,
    repeatChar,
    setRepeatChar,
}) =>{
    return(
        <>
        <h1>Wordle clone Game</h1>
        <nav/>
        <configInput
        setGameState={setGameState}
        playerSubmit={playerSubmit}
        setLengthOfWord={setLengthOfWord}
        lengthOfWord={lengthOfWord}
        repeatChar={repeatChar}
        setRepeatChar={setRepeatChar}
        />
        </>
    );
};

export default configGame;