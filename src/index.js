import Game from "./modules/game";
import Gameboard from "./modules/gameboard";
import GameDOM from "./modules/gameDOM";
import "./styles/style.css";

let startBtn = document.querySelector(".start-game-btn");

let playerGameBoard = new Gameboard();
let computerGameBoard = new Gameboard();

let gameDom = new GameDOM(playerGameBoard, computerGameBoard);
let game = new Game(gameDom);

startBtn.addEventListener("click", () => {
  game.startGame();
  startBtn.classList.toggle("hidden");
});
