import "./GameSummaryModal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  totalRounds: number;
  onRestart: () => void;
}

const GameSummaryModal = ({
  isOpen,
  onClose,
  score,
  totalRounds,
  onRestart,
}: Props) => {
  const accuracyPercentage: number = (score / totalRounds) * 100;

  // Determine performance tier
  const getPerformanceTier = () => {
    if (accuracyPercentage >= 80) return "Color Master";
    if (accuracyPercentage >= 60) return "Color Pro";
    if (accuracyPercentage >= 40) return "Color Learner";
    return "Color Novice";
  };

  const getPerformanceDescription = () => {
    const tier = getPerformanceTier();
    switch (tier) {
      case "Color Master":
        return "Incredible color perception! You have an exceptional eye for color nuances.";
      case "Color Pro":
        return "Solid performance! You're developing a strong understanding of color recognition.";
      case "Color Learner":
        return "Good start! Keep practicing to improve your color perception skills.";
      default:
        return "Don't worry, color recognition takes practice. Keep trying!";
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Game Summary</h2>
          <p>Your color guessing adventure results</p>
        </div>

        <div className="modal-stats">
          <div className="stat-box">
            <strong>Correct Guesses</strong>
            <span>{score}</span>
          </div>
          <div className="stat-box">
            <strong>Total Rounds</strong>
            <span>{totalRounds}</span>
          </div>
        </div>

        <div className="performance-tier">
          <h3>{getPerformanceTier()}</h3>
          <p>{getPerformanceDescription()}</p>
          <p>
            <strong>{accuracyPercentage}% Accuracy</strong>
          </p>
        </div>

        <div className="modal-buttons">
          <button
            className="modal-btn modal-btn-primary"
            onClick={() => {
              onClose();
              onRestart();
            }}
          >
            Play Again
          </button>
          <button className="modal-btn modal-btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameSummaryModal;
