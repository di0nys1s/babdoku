import { useState, useEffect } from "react";
import Tiles from "./components/Tiles/Tiles";
import Sudoku from "./components/Sudoku/Sudoku";
import "./Babdoku.scss";
import { createSelectionTiles } from "./utils/arrays";

function Babdoku() {
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [selectedTilesCount, setSelectedTilesCount] = useState("9x9");
  const [sudokuTileApplied, setSudokuTileApplied] = useState(undefined);
  const [ground, setGround] = useState(undefined);

  function createGround(width, height) {
    let result = [];
    for (var i = 0; i < width; i++) {
      result[i] = [];
      for (var j = 0; j < height; j++) {
        let r = (Math.random() * 4 + 1) | 0;
        // debugger;
        if (result[i].includes(r)) {
          j--;
          continue;
        }
        if (i > 0) {
          const random = r;
          const prev = result[i - 1][j];
          console.log(`random`, random);
          console.log(`prev`, prev);
          if (prev === random) {
            // j--;
            continue;
          }
        }

        result[i][j] = r;
      }
    }
    return result;
  }

  useEffect(() => {
    const ground = createGround(4, 4);
    setGround(ground);
  }, []);

  console.log(`ground`, ground);

  useEffect(() => {
    if (!selectedTilesCount) {
      return;
    }

    setSelectedTilesCount(selectedTilesCount.charAt(0));
  }, [selectedTilesCount]);

  return (
    <div className="babdoku">
      <h1>Babdoku</h1>

      <Tiles
        tileList={createSelectionTiles(selectedTilesCount, [
          "4x4",
          "6x6",
          "9x9",
        ])}
        selectedValue={selectedTilesCount}
        selectedTilesCount={selectedTilesCount}
        setSelectedValue={setSelectedTilesCount}
        tilesType="selection"
      />

      <Sudoku
        selectedNumber={selectedNumber}
        selectedTilesCount={selectedTilesCount}
        setSudokuTileApplied={setSudokuTileApplied}
        tilesType="sudoku"
      />

      <div className="c-number-selection">
        <Tiles
          tileList={createSelectionTiles(selectedTilesCount, [])}
          selectedValue={selectedNumber}
          selectedTilesCount={selectedTilesCount}
          setSelectedValue={setSelectedNumber}
          tilesType="selection"
        />

        {selectedTilesCount && (
          <button
            onClick={() => setSelectedNumber(undefined)}
            className="button button-reset"
            type="reset"
          >
            Reset
          </button>
        )}
        {sudokuTileApplied && (
          <button
            onClick={() => setSelectedNumber(undefined)}
            className="button button-delete"
            type="button"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Babdoku;
