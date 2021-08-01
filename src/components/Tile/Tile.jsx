import React, { useState } from "react";
import cx from "classnames";

import "./Tile.scss";

function Tile({
  selectedValue,
  setSelectedValue,
  setSudokuTileApplied,
  tilesNumber,
  tilesType,
  value,
}) {
  const [sudokuTileSelected, setSudokuTileSelected] = useState(undefined);

  const handleOnClick = () => {
    setSudokuTileSelected(selectedValue);
    setSudokuTileApplied(selectedValue);
  };

  return tilesType === "selection" ? (
    <div
      className={cx({
        "c-tile": true,
      })}
    >
      <label className="c-tile__label" htmlFor={`s_tile_${value}`}>
        {value}
      </label>
      <input
        type="radio"
        className="c-tile__select-item"
        name="tile"
        id={`s_tile_${value}`}
        value={value}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
      />
    </div>
  ) : (
    <button
      onClick={handleOnClick}
      className={`c-tile__${tilesType} c-tile__${tilesNumber}__${sudokuTileSelected}`}
    >
      {sudokuTileSelected}
    </button>
  );
}

export default Tile;
