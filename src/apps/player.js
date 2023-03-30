import { Gameboard } from "./gameboard";

export const Player = (name) => {
  let board = new Gameboard();
  let age = 32;

  // Create fleet of ships
  board.placeShip(5, [0, 0], true);
  board.placeShip(5, [3, 0], true);
  // Player can attack other players board

  return { age, board };
};

let june = Player("June");

console.log(june.board);
