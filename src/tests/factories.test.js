import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";

test("Ship Class: Checks if the hit function works fine   ", () => {
  let ship = new Ship(3);
  ship.hit("1-1");
  ship.hit("1-2");

  expect(ship.hits.length === 2 && ship.isSunk() === false).toBe(true);
});

test("Gameboard Class: chekcing placement horizontal in the middle", () => {
  let board = new Gameboard();
  expect(board.possiblePlacementHorizontal(4, 3, 4)).toBe(true);
});

test("Gameboard Class: checking if placing next edges doesn't go over the board limit", () => {
  let board = new Gameboard();
  expect(board.possiblePlacementHorizontal(0, 0, 4)).toBe(true);
});
