import { Ship } from "../apps/ship";

const guppy = Ship(4);

it.skip("Returns correct length", () => {
  expect(guppy.getLength()).toBe(4);
});

it.skip("Returns correct amount of hits", () => {
  expect(guppy.getHits()).toBe(0);

  guppy.hit();
  expect(guppy.getHits()).toBe(1);
});

it.skip("Returns whether ship is sunk or not", () => {
  expect(guppy.isSunk()).toBeFalsy;
});

it.skip("Ship is sunk if hit amount of times of length", () => {
  expect(guppy.isSunk()).toBe(false); // before hits ship should not be sunk

  // run hits equal to length of ship
  let hits = 0;
  while (hits < guppy.getLength() - 1) {
    guppy.hit();
    hits++;
  }
  expect(guppy.isSunk()).toBe(true); // Ship sunk after hits
});
