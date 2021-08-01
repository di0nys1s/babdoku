import React from "react";
import Tile from "../Tile/Tile";
import "./Tiles.scss";
import cx from "classnames";

function Tiles({
  tilesNumber,
  selectedNumber,
  selectedTilesCount,
  setSelectedValue,
  setSudokuTileApplied,
  tileList,
  tilesType,
}) {
  const tiles = tileList.map((item) => (
    <Tile
      tilesNumber={tilesNumber}
      key={item}
      value={item}
      selectedValue={selectedNumber}
      setSelectedValue={setSelectedValue}
      setSudokuTileApplied={setSudokuTileApplied}
      tilesType={tilesType}
    />
  ));

  return (
    <div
      className={cx({
        "c-tiles": true,
        [[`c-tiles__${tilesType}`]]: tilesType === "selection",
        [`c-tiles__${tilesType} c-tiles__${tilesType}--${selectedTilesCount}`]:
          tilesType === "sudoku",
      })}
    >
      {tiles}
    </div>
  );
}

export default Tiles;
