import PropTypes from "prop-types";

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

GameBoard.propTypes = {
  onSelectSquare: PropTypes.func.isRequired, // onSelectSquare doit être une fonction
  board: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([null]), // Remplace PropTypes.null par PropTypes.oneOf([null])
      ])
    )
  ).isRequired, // board est un tableau de tableaux avec des strings ou null
};
