import "./ColourGuess.css";

interface Props {
  colourCode: string;
  target: string;
  setAnswerValue: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const DisplayColour = ({
  colourCode,
  target,
  setScore,
  setCount,
  setAnswerValue,
}: Props) => {
  const handleGuess = () => {
    if (colourCode == target) {
      setAnswerValue(true);
      setScore((prev) => prev + 1);
    } else {
      setAnswerValue(false);
    }
    setCount((prev) => prev + 1);
  };

  return (
    <div
      className="colour-box"
      data-testid="colorOption"
      style={{ backgroundColor: colourCode }}
      onClick={handleGuess}
    ></div>
  );
};

export default DisplayColour;
