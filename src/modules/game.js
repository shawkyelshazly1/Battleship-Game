import Gameboard from "./gameboard";
import GameDOM from "./gameDOM";
import PlacementBoard from "./placementBoard";

export default class Game {
  constructor() {
    this.gameover = false;
    this.playerBoard = new Gameboard();
    this.computerBoard = new Gameboard();
    this.gameDOM = new GameDOM(this.playerBoard, this.computerBoard);
    this.placementBoard = new PlacementBoard(this.gameDOM);
  }
  startGame() {
    if (this.placementBoard.shipsLength.length === 0) {
      console.log("game over");
      this.placementBoard.resetPlacementBoard();
      this.placementBoard.placementBoard.resetBoard();
      this.gameDOM.computerGameBoard.placeRandomShips();
    }
    this.placementBoard.startPlacement();
  }

  restartGame() {
    this.gameover = false;
  }
}
