import { Ship } from "./apps/script";

const guppy = Ship(4);

it("Returns correct length", () => {
  expect(guppy.getLength()).toBe(4);
});

it("Returns correct amount of hits", () => {
  expect(guppy.getHits()).toBe(0);

  guppy.hit();
  expect(guppy.getHits()).toBe(1);
});

it("Returns whether ship is sunk or not", () => {
  expect(guppy.isSunk()).toBeFalsy;
});

it("Ship is sunk if hit amount of times of length", () => {
  expect(guppy.isSunk()).toBe(false); // before hits ship should not be sunk

  // run hits equal to length of ship
  let hits = 0;
  while (hits < guppy.getLength() - 1) {
    guppy.hit();
    hits++;
  }
  expect(guppy.isSunk()).toBe(true); // Ship sunk after hits
});
