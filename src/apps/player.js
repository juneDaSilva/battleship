import { Gameboard } from "./gameboard";

export const Player = (name) => {
  let board = new Gameboard();

  // Create fleet of ships
  createFleet(board);

  // Send hit function
  const sendHit = (enemy, [col, row]) => {
    return enemy.takeHit([col, row]);
  };

  // Take hit function
  const takeHit = ([col, row]) => {
    return board.receiveAttack(col, row);
  };

  return { sendHit, takeHit };
};

// Hardcoded Fleet for now
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

const moveAI = (player, enemy) => {
  // keep trying for coordinates until they come back legal
  let moveNotLegal = true;
  while (moveNotLegal) {
    let move = [getRandomInt(9), getRandomInt(9)];
    if (player.sendHit(enemy, move) !== "Not legal") {
      moveNotLegal = false;
    }
  }
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

let june = Player("June");
let fred = Player("freddy");
