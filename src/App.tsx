import { useState } from "react";
import "./App.css";
import ColourGuess from "./ColourGuess";

function App() {
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  return (
    <>
      <header>
        <p className="logo">KOLOR </p>
        <button
          data-testid="newGameButton"
          onClick={() => {
            setCount(0);
            setScore(0);
          }}
        >
          New Game
        </button>
      </header>
      <main>
        <ColourGuess
          round={count}
          score={score}
          setScore={setScore}
          setCount={setCount}
        ></ColourGuess>
      </main>
    </>
  );
}

export default App;
