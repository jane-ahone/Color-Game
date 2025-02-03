import { useState } from "react";
import "./App.css";
import ColourGuess from "./ColourGuess";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((prev) => 1 + prev);
  };
  console.log(count);

  return (
    <>
      <header>
        <p className="logo">KOLOR </p>
        <button data-testid="newGameButton" onClick={() => setCount(0)}>
          New Game
        </button>
      </header>
      <main>
        <ColourGuess></ColourGuess>
        <button className="next-btn" onClick={handleClick}>
          Next
        </button>
      </main>
    </>
  );
}

export default App;
