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
  }
  placeShip = (size, [col, row]) => {
    // create ship
    let newShip = Ship(size);

    // put start of ship on coordinate tile and use ships length
    // to also put ship on tiles following it
    // (assumed horizontal)
    let i = 0;
    while (i < newShip.getLength()) {
      let tile = findTile(this.board, [col + i, row]);
      tile.ship = newShip;
      i++;
    }
  };

  receiveAttack = (coordA, coordB) => {};
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

let board = new Gameboard();
board.placeShip(5, [0, 0]);
