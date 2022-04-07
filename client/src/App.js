import { useEffect, useState } from 'react';
import './App.css';



function App() {

  const [correctWord, setCorrectWord] = useState;


  useEffect(()=>{
    const loadWord = async()=>{
      const res = await fetch("/api/word/:length/:allowRepeats");
      const data = res.json();
      setCorrectWord(data.word);
    };


    loadWord();

  }, [])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
