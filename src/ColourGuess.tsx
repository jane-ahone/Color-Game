import { useEffect, useState } from "react";
import "./ColourGuess.css";
import DisplayColour from "./DisplayColour";
import GameSummaryModal from "./GameSummaryModal";

interface Props {
  round: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  targetColour: string;
  colours: string[];
  handleRestart: () => void;
  generateNewRound: () => void;
}

const ColourGuess = ({
  round,
  setCount,
  score,
  setScore,
  targetColour,
  colours,
  generateNewRound,
  handleRestart,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answerValue, setAnswerValue] = useState<boolean | undefined>(
    undefined
  );
  const roundLimit = 5;

  const handleGameEnd = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (round == roundLimit) {
      handleGameEnd();
    }

    const timeoutId = setTimeout(() => {
      setAnswerValue(undefined);
      generateNewRound();
    }, 1500);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round]);

  console.log("hint", colours, targetColour);
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
          data-testid="colorBox"
          style={{ backgroundColor: `${targetColour}` }}
        >
          <p className="instructions" data-testid="gameInstructions">
            What colour is this?
          </p>
          <p className="answer correct" data-testid="gameStatus">
            {answerValue == undefined ? "" : answerValue ? "Correct" : "Wrong"}
          </p>
        </div>
        <div className="colourBoxDiv">
          {Array.from({ length: 6 }, (_, i) => (
            <DisplayColour
              round={round}
              roundLimit={roundLimit}
              colourCode={colours[i]}
              target={targetColour}
              setAnswerValue={setAnswerValue}
              setCount={setCount}
              setScore={setScore}
            ></DisplayColour>
          ))}
        </div>
      </div>
      <GameSummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRestart={handleRestart}
        score={score}
        totalRounds={roundLimit}
      />
    </>
  );
};

export default ColourGuess;
