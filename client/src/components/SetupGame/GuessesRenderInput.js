import GuessesRender from "./GuessesRender";

const GuessesRenderInput =({guesses}) =>{
    return (
      <ul className="GuessesRenderInput">
        {guesses.map((guess, index) => (
          <li key={index}>
            <GuessesRender guess={guess} />
          </li>
        ))}
      </ul>
    );
}


export default GuessesRenderInput;