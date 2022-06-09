function ConfigGame({handlerForStartingGameConfig, wordLength, setWordLength, unique, setUnique}){
    const handlerForStartingGame = ()=> {
        handlerForStartingGameConfig(wordLength, unique);
    };
    return(
        <div className="configGame" >
        <h1>Welcome to Wordle</h1>
        <h2> Configure the game</h2>
        <div>
            <select>
                value = {wordLength}
                onChange={(e) => setWordLength(e.target.value)}
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <label>
                <input type="checkbox"
                checked={unique}
                onChange={(e)=> setUnique(e.target.checked)}/>
                Allow words with unique characters.
            </label>
        </div>
        <button onClick={handlerForStartingGame} >Start the game </button>
        </div>
    )
}

export default ConfigGame;