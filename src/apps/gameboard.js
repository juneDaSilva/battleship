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
    // (assumed horizontal)
    let i = 0;
    if (isHorizontal) {
      while (i < newShip.getLength()) {
        let tile = findTile(this.board, [col + i, row]);
        tile.ship = newShip;
        i++;
      }
    } else {
      while (i < newShip.getLength()) {
        let tile = findTile(this.board, [col, row + i]);
        tile.ship = newShip;
        i++;
      }
    }
    this.shipCount++;
  };

  receiveAttack = (row, col) => {
    let tile = findTile(this.board, [row, col]);
    if (tile === undefined) return "Coordinates out of bounds";
    if (tile.isHit()) return "Spot already hit!";
    if (!tile.ship) {
      tile.takeHit();
      return "Shot missed!";
    } else {
      tile.takeHit();
      tile.ship.hit();
      if (tile.ship.isSunk()) {
        this.shipCount--;
        if (this.shipCount === 0) {
          return "Game over!";
        }
      }
      return "Hit taken!";
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

const findTile = (board, [a, b]) => {
  for (let tile of board) {
    if (tile.coordinate[0] == a && tile.coordinate[1] == b) {
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
      if (tile.ship) return true;
      i++;
    }
  } else {
    while (i < length) {
      let tile = findTile(board, [col, row + i]);
      if (tile.ship) return true;
      i++;
    }
  }
  return false;
};

let board = new Gameboard();

board.receiveAttack(0, 0);
