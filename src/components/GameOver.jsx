import PropTypes from "prop-types";
export default function GameOver({ winner, onReStart }) {
  return (
    <div id="game-over">
      <h2 className="game-over-text">
        Game Over! <span className="emoji bounce">😭</span>
        <span className="emoji spin">🎮</span>
      </h2>
      <span className="trophy">
        {winner && (
          <p>
            <span className="emoji bounce">🏅🏅</span> {winner} won!
            <span className="emoji spin">🏆</span>
          </p>
        )}
      </span>
      {!winner && (
        <p>
          It&apos;s a draw! <span className="emoji shake">🤝</span>
        </p>
      )}
      <p>
        <button onClick={onReStart}>
          Rematch! <span className="emoji spin">🔁</span>
          <span className="emoji bounce">🌝</span>
        </button>
      </p>
    </div>
  );
}

// Définir les prop-types
GameOver.propTypes = {
  winner: PropTypes.string,
  onReStart: PropTypes.func.isRequired,
};

// Définir les valeurs par défaut (optionnel)
GameOver.defaultProps = {
  winner: null,
};
