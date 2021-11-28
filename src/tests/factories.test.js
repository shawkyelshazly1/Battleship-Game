import { create } from "enhanced-resolve";
import createShip from "../modules/ship";

test("should create a ship object", () => {
  expect(createShip(2, [(1, 1), (1, 2)])).toMatchObject({
    size: 2,
    position: [(1, 1), (1, 2)],
  });
});

test("should return true as ship isSunk when all positions in hits", () => {
  let ship = createShip(2, ["1-A", "1-B"]);
  ship.hit("1-A");
  ship.hit("1-B");
  expect(ship.isSunk()).toBe(true);
});

