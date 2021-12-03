import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";

test("Ship Class: Checks if the hit function works fine   ", () => {
  let ship = new Ship(3, 0, 0, "horizontal");
  ship.hit([0, 0]);
  ship.hit([0, 1]);
  ship.hit([0, 2]);
  expect(ship.hits.length === 3 && ship.isSunk() === true).toBe(true);
});

test("Gameboard Class: chekcing placement horizontal in the middle", () => {
  let board = new Gameboard();
  expect(board.possiblePlacementHorizontal(4, 3, 4)).toBe(true);
});

test("Gameboard Class: checking if placing next edges doesn't go over the board limit", () => {
  let board = new Gameboard();
  expect(board.possiblePlacementHorizontal(9, 1, 4)).toBe(true);
});

test("Gameboard Class: checking if placing next other ship matches the conditions", () => {
  let board = new Gameboard();
  board.addShip(new Ship(4, 0, 0, "vertical"), "0-0", "vertical");
  let target = board.board[0][0];
  board.recieveAttack("0-0");
  board.recieveAttack("1-0");
  board.recieveAttack("2-0");
  board.recieveAttack("3-0");
  expect(target.isSunk()).toBe(true);
});
