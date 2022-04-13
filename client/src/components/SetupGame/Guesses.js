import { useState } from "react";


const Guesses = ({checkGuess, correctWord})=>{
    const [text, setText] = useState('');


    const ValueChange = (e) => {
        const { value } = e.target;
        const re = /^[A-Za-z]+$/;
        if (value === '' || re.test(value)) {
          setText(value);
        }
      };

      const ClickToGuess = () => {
        if (text.length === correctWord.length) {
          checkGuess(text.toUpperCase());
          setText('');
        } else {
          window.alert('Put the right word');
        }
      };

    return (
    <div className="Guesses">
      <input
        value={text}
        onChange={ValueChange}
        type="text"
        placeholder="Please guess"
      />
      <button onClick={ClickToGuess}>Guess</button>
    </div>
    )
}

export default Guesses;