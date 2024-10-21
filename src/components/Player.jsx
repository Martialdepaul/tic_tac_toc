import { useState } from "react";
import PropTypes from "prop-types";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  let edittablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    edittablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {edittablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
Player.propTypes = {
  initialName: PropTypes.string.isRequired, // initialName doit être une chaîne de caractères
  symbol: PropTypes.string.isRequired, // symbol doit être une chaîne de caractères
  isActive: PropTypes.bool.isRequired, // isActive doit être un booléen
  onChangeName: PropTypes.func.isRequired, // onChangeName doit être une fonction
};
