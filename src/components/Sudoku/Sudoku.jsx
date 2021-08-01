import React from "react";
import Tiles from "../Tiles/Tiles";
import { createSelectionTiles } from "../../utils/arrays";
import "./Sudoku.scss";

function Sudoku({ selectedTilesCount, selectedNumber, setSudokuTileApplied }) {
  return (
    <>
      <div className={`c-sudoku c-sudoku--${selectedTilesCount}`}>
        {Array.apply(null, { length: selectedTilesCount }).map((e, i) => (
          <Tiles
            tileList={createSelectionTiles(selectedTilesCount, [])}
            selectedNumber={selectedNumber}
            selectedTilesCount={selectedTilesCount}
            setSudokuTileApplied={setSudokuTileApplied}
            tilesType="sudoku"
            tilesNumber={i + 1}
          />
        ))}
      </div>
    </>
  );
}

export default Sudoku;
