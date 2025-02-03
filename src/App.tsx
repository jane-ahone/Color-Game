import { useState } from "react";
import "./App.css";
import ColourGuess from "./ColourGuess";
import { colourGenerate } from "./utils/colourGenerator";

function App() {
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [colours, setColours] = useState<string[]>([]);
  const [targetColour, setTargetColour] = useState<string>("");

  const generateNewRound = () => {
    const newColors = Array.from({ length: 6 }, () => colourGenerate());
    const randomIndex = Math.floor(Math.random() * 5);
    setTargetColour(newColors[randomIndex]);
    setColours(newColors);
  };

  const handleRestart = () => {
    setScore(0);
    setCount(0);
    generateNewRound();
  };

  return (
    <>
      <header>
        <p className="logo">COLOR </p>
        <button
          data-testid="newGameButton"
          onClick={() => {
            handleRestart();
          }}
        >
          New Game
        </button>
      </header>
      <main>
        <ColourGuess
          round={count}
          score={score}
          colours={colours}
          targetColour={targetColour}
          setScore={setScore}
          generateNewRound={generateNewRound}
          handleRestart={handleRestart}
          setCount={setCount}
        ></ColourGuess>
      </main>
    </>
  );
}

export default App;
