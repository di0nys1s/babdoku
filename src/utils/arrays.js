export const createSelectionTiles = (number, arr) => {
  if (number !== undefined && !arr.length) {
    for (let i = 1; i <= number; i += 1) {
      arr.push(i);
    }
  }
  return arr;
};
