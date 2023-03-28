import "./style.css";

import { printMe } from "./apps/script";

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
