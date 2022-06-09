import { useState } from "react";

const PlayerGuess = ({guess, wordTrue})=>{
    const [text, setText] = useState('');

    const ClickGuess = () => {
      if (text.length === wordTrue.length) {
        guess(text.toUpperCase());
        setText('');
      } else {
        window.alert('Try again');
      }
    };
    return (
    <div className="PlayerGuess">
      <input
        value={text}
        onChange={ClickGuess}
        type="text"
        placeholder="Guess something!"
      />
      <button onClick={()=> guess(text)}>Guess</button>
    </div>
    )
}

export default PlayerGuess;