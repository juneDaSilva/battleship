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

  renderBoard(player1, computer, friendlyBoard);
  renderBoard(computer, player1, enemyBoard);
};

const renderBoard = (player, enemy, board) => {
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

const declareWinner = (player) => {
  winner.classList.add("declared");
  player.getName() === "Computer"
    ? (winner.innerHTML = `${player.getName()}  wins this round!`)
    : (winner.innerHTML = `${player.getName()}  win this round!`);
};

const stopAndListen = (player) => {
  let gameDone = document.querySelector("main");
  gameDone.addEventListener(
    "click",
    () => {
      player.endGame();
    },
    { once: true }
  );
};

// TODO: UPDATE TILE COLORS AS THEYRE BEING HIT
const updateTileColor = (tile, response) => {
  if (response === "shot missed") tile.classList.add("missed");
  if (response === "hit taken!" || response === "game over")
    tile.classList.add("hit");
};
