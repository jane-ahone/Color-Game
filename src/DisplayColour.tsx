import "./ColourGuess.css";

interface Props {
  round: number;
  roundLimit: number;
  colourCode: string;
  target: string;
  setAnswerValue: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const DisplayColour = ({
  colourCode,
  target,
  round,
  roundLimit,
  setScore,
  setCount,
  setAnswerValue,
}: Props) => {
  const handleGuess = () => {
    if (round < roundLimit) {
      if (colourCode == target) {
        setAnswerValue(true);
        setScore((prev) => prev + 1);
      } else {
        setAnswerValue(false);
      }
      setCount((prev) => prev + 1);
    }
  };
  console.log(round, roundLimit);
  console.log(round <= roundLimit);

  return (
    <div
      className="colour-box"
      data-testid="colorOption"
      style={{
        backgroundColor: colourCode,
        boxShadow: "rgb(17 1 1 / 25%) 4px 2px 3px",
      }}
      onClick={handleGuess}
    ></div>
  );
};

export default DisplayColour;
