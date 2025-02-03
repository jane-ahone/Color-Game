import "./ColourGuess.css";

interface Props {
  colourCode: string;
}

const DisplayColour = ({ colourCode }: Props) => {
  return (
    <div
      className="colour-box"
      data-testid="colorOption"
      style={{ backgroundColor: colourCode }}
    ></div>
  );
};

export default DisplayColour;
