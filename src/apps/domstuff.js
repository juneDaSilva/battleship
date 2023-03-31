export const createBoards = () => {
  const friendlyBoard = document.querySelector(".friendly.board");
  const enemyBoard = document.querySelector(".enemy.board");

  renderBoard(null, friendlyBoard);
  renderBoard(null, enemyBoard);
};

const renderBoard = (player, board) => {
  board.innerHTML = "";

  for (let i = 9; i >= 0; i--) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 10; j++) {
      let tile = document.createElement("div");
      tile.classList.add("tile");

      // Add this to match with tile objects
      tile.dataset.value = [i, j];

      row.append(tile);
    }
    board.append(row);
  }
  return board;
};
