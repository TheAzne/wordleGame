function ConfigInput({
  playerSubmit,
  setLengthOfWord,
  lengthOfWord,
  repeatChar,
  setRepeatChar,
}) {
  function playerChoice(event) {
    event.preventDefault();
    playerSubmit(lengthOfWord, repeatChar);
  }

  return (
    <>
      <h3>Game setup</h3>
      <form onSubmit={playerChoice}>
        <label>Length of the word?</label>
        <br />
        <select
          value={lengthOfWord}
          onChange={(event) => setLengthOfWord(parseInt(event.target.value))}
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div>
          <input
            type="radio"
            value={repeatChar}
            onChange={() => setRepeatChar(false)}
            checked={!repeatChar}
          />
          Two characters in one word (example: meet)
          <br />
          <input
            type="radio"
            value={repeatChar}
            onChange={() => setRepeatChar(true)}
            checked={repeatChar}
          />
          Two same characters in a word is not allowed.
        </div>
        <button type="submit">Play</button>
      </form>
    </>
  );
}

export default ConfigInput;
