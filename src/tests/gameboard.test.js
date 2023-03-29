import { Gameboard } from "../apps/gameboard";

let testBoard = new Gameboard();

it("Gameboard creates board of 100 spaces", () => {
  expect(testBoard.board).toHaveLength(100);
});
