import { Gameboard } from "./gameboard";

export const Player = (name) => {
  let board = new Gameboard();
  let age = 32;

  // Create fleet of ships
  createFleet(board);
  // board.placeShip(5, [0, 0], true);

  // Player can attack other players board

  return { age, board };
};

const createFleet = (board) => {
  let coordinates = [
    [0, 0],
    [9, 9],
    [0, 8],
    [1, 5],
    [5, 3],
  ];
  let orientations = [true, false, true, false, true];
  let sizes = [5, 4, 3, 2, 3];

  for (let i in coordinates) {
    board.placeShip(sizes[i], coordinates[i], orientations[i]);
  }
};

let june = Player("June");

console.log(june);
