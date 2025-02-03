import { useEffect, useState } from "react";
import "./ColourGuess.css";
import { colourGenerate } from "./utils/colourGenerator";
import DisplayColour from "./DisplayColour";

const ColourGuess = () => {
  const [colours, setColours] = useState<string[]>([]);
  const [targetColour, setTargetColour] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setTargetColour(colourGenerate());
    const newColors = Array.from({ length: 5 }, () => colourGenerate());
    setColours(newColors);
  }, []);

  console.log(colours, targetColour);
  return (
    <>
      {" "}
      <div className="gameDetails">
        <div className="roundDetails">
          <p className="title">Round</p>
          <p className="value">1/20</p>
        </div>
        <div className="scoreDetails">
          <p className="title">Score</p>
          <p data-testid="score" className="value">
            {score}
          </p>
        </div>
      </div>
      <div>
        <div>
          <p
            className="instructions"
            style={{ backgroundColor: `${targetColour}` }}
          >
            What colour is this?
          </p>
        </div>
        <div className="colourBoxDiv">
          <DisplayColour colourCode={targetColour}></DisplayColour>
          {Array.from({ length: 5 }, (_, i) => (
            <DisplayColour colourCode={colours[i]}></DisplayColour>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColourGuess;
