import { createBoards } from "./domstuff";

export const buildElement = (element_type, class_name, id_name, content) => {
  const element = document.createElement(element_type);
  if (class_name) {
    for (const myClass in class_name) {
      element.classList.add(class_name[myClass]);
    }
  }

  if (id_name) element.id = id_name;
  if (content) element.innerText = content;

  return element;
};

export const renderMain = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const winWrap = buildElement("div", ["winner-wrap"]);
  const winner = buildElement("div", null, "winner", "God speed, Captain");

  const boards = buildElement("div", ["boards"]);

  const gameboard1 = buildElement("div", ["gameboard"]);
  const player1 = buildElement("div", ["player"], null, "YOUR BOARD");
  const friendlyBoard = buildElement("div", ["friendly", "board"]);
  gameboard1.append(player1, friendlyBoard);

  const gameboard2 = buildElement("div", ["gameboard"]);
  const player2 = buildElement("div", ["player"], null, "ENEMY BOARD");
  const enemyBoard = buildElement("div", ["enemy", "board"]);
  gameboard2.append(player2, enemyBoard);

  winWrap.append(winner);
  boards.append(gameboard1, gameboard2);
  main.append(winWrap, boards);
};
