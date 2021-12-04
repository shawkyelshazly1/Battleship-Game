import GameDOM from "./gameDOM";

export default class Game {
  constructor(gameDom) {
    this.gameover = false;
    this.gameDom = gameDom;
  }
  startGame() {
    this.gameDom.startGame();
  }

  restartGame() {
    this.gameover = false;
  }
}
