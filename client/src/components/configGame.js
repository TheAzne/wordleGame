import ConfigInput from "./PlayerChoice";
import Nav from "./Nav";
const ConfigGame = ({
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
        <Nav />

        <ConfigInput
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

export default ConfigGame;