import { Gameboard } from "../apps/gameboard";

let testBoard = new Gameboard();

it("Gameboard creates board of 100 spaces", () => {
  expect(testBoard.board).toHaveLength(100);
});

it("receiveAttack rejects out of bound coordinates", () => {
  expect(testBoard.receiveAttack(10, 0)).toEqual("Coordinates out of bounds");
});

it("receiveAttack recognizes if shot missed", () => {
  expect(testBoard.receiveAttack(0, 0)).toBe("Shot missed!");
});

it("receiveAttack recognizes if spot has already been hit", () => {
  expect(testBoard.receiveAttack(0, 0)).toBe("Spot already hit!");
});

testBoard.placeShip(2, [1, 0], true);
it("Game is over when all ships are sunk", () => {
  testBoard.receiveAttack(1, 0);
  expect(testBoard.receiveAttack(2, 0)).toBe("Game over!");
});
