import { useState } from "react";
import NavMenu from "./NavMenu";


function SetupHome({
  handleSubmitConfig,
  unique,
  wordLength,
  setUnique,
  setWordLength,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitConfig(unique, wordLength);
  }
  return (
    <div className="HomePage">
      <h1> David Wordle Game</h1>
      <NavMenu />
      <h2>Game configuration</h2>
      <form onSubmit={handleSubmit}>
        <h3> Choose you setup</h3>
        <div>
          Choose the length of the word
          <select
            className="selecting"
            value={wordLength}
            onChange={(e) => setWordLength(parseInt(e.target.value))}
          >
            <option value="3">3 Characters </option>
            <option value="4">4 Characters</option>
            <option value="5">5 Characters</option>
          </select>
        </div>
        <div>
          Unique characters? Check it!
          <input
            type={"checkbox"}
            checked={unique}
            onChange={(e) => setUnique(e.target.checked)}
          />
        </div>
        <button type="submit">Continue for play</button>
      </form>
    </div>
  );
}

export default SetupHome;
