import Game from "./modules/game";
import Gameboard from "./modules/gameboard";
import GameDOM from "./modules/gameDOM";
import "./styles/style.css";

let startBtn = document.querySelector(".start-game-btn");
let headline = document.querySelector(".headline");


let game = new Game();



startBtn.addEventListener("click", () => {
  game.startGame();
  startBtn.classList.toggle("hidden");
  headline.classList.toggle("hidden");
});
