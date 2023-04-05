import { renderPage } from "./domstuff";
import { Gameboard } from "./gameboard";
export let botMoving = false;
let winner = document.getElementById("winner");

export const Player = (name) => {
  let board = new Gameboard();

  // Create fleet of ships
  createFleet(board);

  // Send hit function
  const sendHit = (enemy, [col, row]) => {
    return enemy.takeHit(name, [col, row]);
  };

  // Take hit function
  const takeHit = (enemy, [col, row]) => {
    let response = board.receiveAttack(enemy, col, row);
    // logResponse(response, name, enemy);
    return response;
  };

  const endGame = () => {
    renderPage();
  };

  const getName = () => {
    return name;
  };

  const getBoard = () => {
    return board;
  };

  const restart = () => {
    board = new Gameboard();
    // createFleet(board);
  };

  return { sendHit, takeHit, getName, endGame, restart, getBoard };
};

// Create function that gets info from user and creates ships
// *-*-* --------- NOT IN USE YET -------- *-*-*
const createShips = () => {
  let coordinates = [];
  let orientation = [];
  let sizes = [5, 4, 3, 3, 2];

  for (let i in sizes) {
  }
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

export const moveAI = (player, enemy) => {
  // keep trying for coordinates until they come back legal
  let moveNotLegal = true;
  while (moveNotLegal) {
    let move = [getRandomInt(10), getRandomInt(10)];
    let response = player.sendHit(enemy, move);
    if (response !== "not legal") {
      moveNotLegal = false;
      // UPDATE FRIENDLY BOARD WITH COMPUTER'S MOVE
      let tile = document.getElementById(move);
      return { tile, response };
    }
  }
};

export const changeTurn = () => {
  botMoving = !botMoving;
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
