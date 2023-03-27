function component() {
  const element = document.createElement("div");

  element.innerHTML = "Battleship";
  return element;
}

document.body.appendChild(component());
