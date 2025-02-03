import { useEffect, useState } from "react";
import "./ColourGuess.css";
import { colourGenerate } from "./utils/colourGenerator";
import DisplayColour from "./DisplayColour";

interface Props {
  round: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const ColourGuess = ({ round, setCount, score, setScore }: Props) => {
  const [colours, setColours] = useState<string[]>([]);
  const [targetColour, setTargetColour] = useState<string>("");
  const [answerValue, setAnswerValue] = useState<boolean | undefined>(
    undefined
  );

  console.log("Answer Value", answerValue);

  console.log(answerValue ? "Correct" : "Wrong");

  const generateNewRound = () => {
    const newColors = Array.from({ length: 6 }, () => colourGenerate());
    const randomIndex = Math.floor(Math.random() * 5);
    setTargetColour(newColors[randomIndex]);
    setColours(newColors);
  };

  useEffect(() => {
    if (round == 5) {
      setCount(0);
      setScore(0);
    }
    const timeoutId = setTimeout(() => {
      setAnswerValue(undefined);
      generateNewRound();
    }, 1500);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round]);

  // console.log(colours, targetColour);
  return (
    <>
      {" "}
      <div className="gameDetails">
        <div className="roundDetails">
          <p className="title">Round</p>
          <p className="value">{round}/5</p>
        </div>
        <div className="scoreDetails">
          <p className="title">Score</p>
          <p data-testid="score" className="value">
            {score}
          </p>
        </div>
      </div>
      <div>
        <div
          className="target-div"
          style={{ backgroundColor: `${targetColour}` }}
        >
          <p className="instructions">What colour is this?</p>
          <p className="answer correct">
            {answerValue == undefined ? "" : answerValue ? "Correct" : "Wrong"}
          </p>
        </div>
        <div className="colourBoxDiv">
          {Array.from({ length: 6 }, (_, i) => (
            <DisplayColour
              colourCode={colours[i]}
              target={targetColour}
              setAnswerValue={setAnswerValue}
              setCount={setCount}
              setScore={setScore}
            ></DisplayColour>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColourGuess;
