import "./style.css";
import Icon from "./images/github.png";
import { renderPage, createBoards } from "./apps/domstuff";
import { Player } from "./apps/player";
import { renderPlacer } from "./apps/placeShips";
export let player1 = Player("you");

renderPlacer();
