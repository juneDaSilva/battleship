import { buildElement } from "./renderGame";
import { renderPage } from "./domstuff";
import { player1 } from "..";

export const renderPlacer = () => {
  player1.restart();
  const main = document.querySelector("main");
  main.innerHTML = "";

  const wrap = buildElement("div", ["place-wrap"]);
  const title = buildElement(
    "h3",
    ["place-title"],
    null,
    "Place youre ships to begin"
  );
  const board = buildElement("div", ["board"]);
  const rotate = buildElement("div", ["rotate"], null, "rotate ship");

  for (let r = 9; r >= 0; r--) {
    let row = buildElement("div", ["row"]);

    for (let col = 0; col < 10; col++) {
      let tile = buildElement("div", ["place"]);

      // Add this to match with tile objects
      tile.id = [col, r];

      row.append(tile);
    }
    board.append(row);
  }
  title.append(board, rotate);
  wrap.append(title);
  main.append(wrap);
  placeShips();
};

const toggleOrientation = (isHorizontal) => {
  isHorizontal = !isHorizontal;
  console.log(isHorizontal);
  return isHorizontal;
};

const placeShips = () => {
  let isHorizontal = true;

  let ship = [5, 4, 3, 3, 2];
  let number = 0;
  displayShip(ship[number], isHorizontal, ship, number);
};

const displayShip = (length, orientation, ship, number) => {
  if (number >= ship.length) {
    startGame();
  } else {
    const tiles = document.querySelectorAll(".place");
    const rotateShip = document.querySelector(".rotate");

    rotateShip.addEventListener("click", () => {
      orientation = toggleOrientation(orientation);
      displayShip(length, orientation, ship, number);
    });

    tiles.forEach((tile) => {
      tile.onmouseover = function (event) {
        // grab tile id's from tiles covering ship length
        let shipArray = getShipDisplay(event.target.id, length, orientation);

        colorHover(shipArray, "var(--friendly-ship-color)"); // color them all together
      };
      tile.onmouseout = function (event) {
        let shipArray = getShipDisplay(event.target.id, length, orientation);
        colorHover(shipArray, "#fff");
      };
      tile.onclick = function (event) {
        let coords = [event.target.id[0], event.target.id[2]];
        let response = player1
          .getBoard()
          .placeShip(length, coords, orientation);

        if (response !== "area occupied") {
          let shipArray = getShipDisplay(event.target.id, length, orientation);
          colorPlacedShip(shipArray);
          number++;
          displayShip(ship[number], orientation, ship, number);
        } else {
          console.log("cant place ship here");
        }
      };
    });
  }
};

const startGame = () => {
  const startButton = document.querySelector(".rotate");
  const tiles = document.querySelectorAll(".place");
  startButton.innerHTML = "START GAME";

  tiles.forEach((tile) => {
    tile.onmouseover = null;
    tile.onclick = null;
  });

  startButton.addEventListener("click", () => {
    renderPage();
  });
};

const colorPlacedShip = (ship) => {
  for (let coordinate of ship) {
    if (
      coordinate[0] >= 0 &&
      coordinate[0] <= 9 &&
      coordinate[1] >= 0 &&
      coordinate[1] <= 9
    ) {
      let tile = document.getElementById(coordinate);
      tile.id = "placed";
    }
  }
};

const getShipDisplay = (currentTile, length, isHorizontal) => {
  let array = [];
  let i = 0;
  if (isHorizontal) {
    while (i < length) {
      let coordinates = [
        parseInt(currentTile[0]) + i,
        parseInt(currentTile[2]),
      ];
      array.push(coordinates);
      i++;
    }
  } else if (!isHorizontal) {
    while (i < length) {
      let coordinates = [
        parseInt(currentTile[0]),
        parseInt(currentTile[2] - i),
      ];
      array.push(coordinates);
      i++;
    }
  }

  return array;
};

const colorHover = (ship, color) => {
  for (let coordinate of ship) {
    if (
      coordinate[0] != NaN &&
      coordinate[1] !== NaN &&
      coordinate[0] >= 0 &&
      coordinate[0] <= 9 &&
      coordinate[1] >= 0 &&
      coordinate[1] <= 9
    ) {
      let tile = document.getElementById(coordinate);
      if (tile !== null) tile.style.cssText = `background-color: ${color};`;
    }
  }
};
