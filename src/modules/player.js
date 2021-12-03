import Gameboard from "./gameboard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
  }

  attack(coordinates, gameboard) {
    gameboard.recieveAttack(coordinates);
  }
}
