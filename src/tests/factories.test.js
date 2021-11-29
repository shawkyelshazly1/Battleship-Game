import Ship from "../modules/ship";

test("Ship Class: Checks if the hit function works fine   ", () => {
  let ship = new Ship(3);
  ship.hit("1-1");
  ship.hit("1-2");

  expect(ship.hits.length === 2 && ship.isSunk() === false).toBe(true);
});
