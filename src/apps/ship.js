export const Ship = (length) => {
  let hits = 0;
  let sunk = false;
  const getLength = () => length;
  const getHits = () => hits;
  const isSunk = () => sunk;
  const hit = () => {
    hits++;
    console.log("Ship has been hit");
    if (hits == getLength()) {
      console.log("ship sunk");
      sunk = true;
    }
  };

  return { getLength, getHits, isSunk, hit };
};
