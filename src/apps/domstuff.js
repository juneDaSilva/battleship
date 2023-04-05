import { findTile } from "./gameboard";
import { Player, moveAI, botMoving, changeTurn } from "./player";
let winner = document.getElementById("winner");

let player1 = Player("You");
let computer = Player("Computer");

export const renderPage = () => {
  player1.restart();
  computer.restart();
  createBoards();
  winner.classList.remove("declared");
  winner.innerHTML = "God speed, Captain";
};

export const createBoards = () => {
  const friendlyBoard = document.querySelector(".friendly.board");
  const enemyBoard = document.querySelector(".enemy.board");

  renderBoard(player1, friendlyBoard);
  renderBoard(computer, enemyBoard);
};

const renderBoard = (player, board) => {
  let playerBoard = player.getBoard().board;
  board.innerHTML = "";

  for (let r = 9; r >= 0; r--) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let col = 0; col < 10; col++) {
      let tile = document.createElement("div");
      tile.classList.add("tile");

      // Add this to match with tile objects
      tile.dataset.value = [col, r];

      if (player.getName() === "Computer") {
        tile.onclick = takeTurn;
      } else {
        tile.id = [col, r];
        let cell = findTile(playerBoard, [col, r]);
        // shade in friendly ship positions
        if (cell.ship) tile.classList.add("friendlyShip");
      }
      row.append(tile);
    }
    board.append(row);
  }
  return board;
};

const takeTurn = (e) => {
  let values = [e.target.dataset.value[0], e.target.dataset.value[2]];
  if (!botMoving) {
    let response = computer.takeHit(player1.getName(), values);
    if (response !== "not legal") {
      updateTileColor(e.target, response);
      if (response === "game over") {
        declareWinner(player1);
        e.stopImmediatePropagation();
        stopAndListen(player1);
        return;
      }
      // Add end turn function
      changeTurn();
      setTimeout(() => {
        let move = moveAI(computer, player1);
        updateTileColor(move.tile, move.response);
        if (move.response === "game over") {
          declareWinner(computer);
          e.stopImmediatePropagation();
          stopAndListen(computer);
          return;
        }
        changeTurn();
      }, "000");
    }
  }
};

//display winner message
const declareWinner = (player) => {
  winner.classList.add("declared");
  player.getName() === "Computer"
    ? (winner.innerHTML = `${player.getName()}  wins this round!`)
    : (winner.innerHTML = `${player.getName()}  win this round!`);
};

// On game won, board restarts game onclick
const stopAndListen = (player) => {
  let gameDone = document.querySelector("main");
  gameDone.addEventListener(
    "click",
    () => {
      renderPage();
    },
    { once: true }
  );
};

// Update tile colors once clicked
const updateTileColor = (tile, response) => {
  if (response === "shot missed") tile.classList.add("missed");
  if (response === "hit taken!" || response === "game over") {
    tile.classList.remove("friendlyShip");
    tile.classList.add("hit");
  }
};
