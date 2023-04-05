// import { renderPage } from "./domstuff";
import { Ship } from "./ship";

export class Tile {
  #hit = false;

  constructor(row, column) {
    this.coordinate = [row, column];
    this.free = true;
    this.ship = null;
  }

  isHit = () => {
    return this.#hit;
  };

  takeHit = () => {
    this.#hit = true;
  };
}

export class Gameboard {
  constructor() {
    this.board = createBoard();
    this.shipCount = 0;
  }
  placeShip = (size, [col, row], isHorizontal) => {
    // create ship
    let newShip = Ship(size);

    // Check if area occupied by other ship
    if (isOccupied(this.board, newShip.getLength(), [col, row], isHorizontal)) {
      console.log("Area occupied");
      return "Area occupied";
    }

    // put start of ship on coordinate tile and use ships length
    // to also put ship on tiles following it
    let i = 0;
    if (isHorizontal) {
      while (i < newShip.getLength()) {
        let tile = findTile(this.board, [col + i, row]);
        tile.ship = newShip;
        i++;
      }
    } else {
      while (i < newShip.getLength()) {
        let tile = findTile(this.board, [col, row - i]);
        tile.ship = newShip;
        i++;
      }
    }
    this.shipCount++;
  };

  receiveAttack = (enemy, col, row) => {
    let tile = findTile(this.board, [col, row]);
    if (tile === undefined) {
      // console.log("Out of bounds");
      return "not legal";
    }
    if (tile.isHit()) {
      // console.log("Already hit");
      return "not legal";
    }
    if (!tile.ship) {
      tile.takeHit();
      console.log("Shot missed!");
      return "shot missed";
    } else {
      tile.takeHit();
      tile.ship.hit();
      if (tile.ship.isSunk()) {
        this.shipCount--;
        if (this.shipCount === 0) {
          return "game over";
        }
      }
      return `hit taken!`;
    }
  };
}

const createBoard = () => {
  let board = [];
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      board.push(new Tile(col, row));
    }
  }
  return board;
};

export const findTile = (board, [col, row]) => {
  for (let tile of board) {
    if (tile.coordinate[0] == col && tile.coordinate[1] == row) {
      return tile;
    }
  }
};

const isOccupied = (board, length, [col, row], isHorizontal) => {
  // check if ship is already there
  let i = 0;
  if (isHorizontal) {
    while (i < length) {
      let tile = findTile(board, [col + i, row]);
      if (tile === undefined) return true; // check if it overflows out of board
      if (tile.ship) return true; // check if ship already there

      i++;
    }
  } else {
    // console.log("vertical");
    while (i < length) {
      let tile = findTile(board, [col, row - i]);
      if (tile === undefined) return true;
      if (tile.ship) return true;

      i++;
    }
  }
  return false;
};
