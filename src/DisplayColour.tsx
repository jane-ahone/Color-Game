import "./ColourGuess.css";

interface Props {
  colourCode: string;
  target: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const DisplayColour = ({ colourCode, target, setScore, setCount }: Props) => {
  const handleGuess = () => {
    if (colourCode == target) {
      setScore((prev) => prev + 1);
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
