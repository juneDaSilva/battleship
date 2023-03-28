import "./style.css";
import Icon from "./01d.svg";

import { printMe } from "./script";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Battleship";
  element.classList.add("hello");

  btn.innerHTML = "click me!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
