import Gameboard from "./gameboard";
import Ship from "./ship";

const SIZE = 10;

export default class GameDOM {
  /*
   *TODO:
      1- GameDOM comments 
      2- Allow drag & drop of ships 
   */

  constructor(playerGameBoard, computerGameBoard) {
    this.pBoard = document.querySelector(".left");
    this.cBoard = document.querySelector(".right");
    this.currentPlayer = null;
    this.playerGameBoard = playerGameBoard;
    this.computerGameBoard = computerGameBoard;
  }

  initializeBoards() {
    this.cBoard.addEventListener("click", (e) => {
      this.currentPlayer == "player" ? this.playerAttack(e) : null;
    });

    this.pBoard.textContent = "";
    this.cBoard.textContent = "";

    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        let div = document.createElement("div");
        div.setAttribute("data-coord", `${row}-${col}`);
        div.classList.add("board-cell");
        if (this.playerGameBoard.board[row][col] !== null) {
          div.textContent = "S";
        }

        let div2 = document.createElement("div");
        div2.setAttribute("data-coord", `${row}-${col}`);
        div2.classList.add("board-cell");

        this.pBoard.appendChild(div);
        this.cBoard.appendChild(div2);
      }
    }
  }

  switchBoard() {
    switch (this.currentPlayer) {
      case "player":
        this.disableFields(this.pBoard);
        this.enableFields(this.cBoard);
        break;
      case "computer":
        this.disableFields(this.cBoard);
        this.enableFields(this.pBoard);
        break;
      default:
        break;
    }
  }

  disableFields(board) {
    let elementNodes = [...board.children];
    elementNodes.forEach((node) => {
      node.classList.add("disabled");
    });
  }

  enableFields(board) {
    let elementNodes = [...board.children];
    elementNodes.forEach((node) => {
      node.classList.remove("disabled");
    });
  }

  switchTurn() {
    if (this.currentPlayer === "player") {
      this.currentPlayer = "computer";
      this.computerAttack();
    } else {
      this.currentPlayer = "player";
    }
  }

  computerAttack() {
    let row = Math.floor(Math.random() * SIZE);
    let col = Math.floor(Math.random() * SIZE);
    let coords = `${row}-${col}`;
    console.log(coords);
    let outcome = this.playerGameBoard.recieveAttack(coords);

    if (this.successfulShot(outcome, this.pBoard, coords)) {
      this.checkGameOver(this.playerGameBoard);
      this.computerAttack();
    } else if (this.MissedShot(outcome, this.pBoard, coords)) {
      this.switchTurn();
      this.switchBoard();
    } else {
      this.computerAttack();
    }
  }
  playerAttack(e) {
    let coords = e.target.dataset.coord;
    let outcome = this.computerGameBoard.recieveAttack(coords);
    if (this.successfulShot(outcome, this.cBoard, coords)) {
      this.checkGameOver(this.computerGameBoard);
    } else if (this.MissedShot(outcome, this.cBoard, coords)) {
      this.switchTurn();
      this.switchBoard();
    }
  }

  successfulShot(outcome, board, coords) {
    if (outcome instanceof Ship) {
      outcome.isSunk()
        ? this.highlightSunkShip(outcome, board)
        : this.highlightShipHit(board, coords);
      return true;
    }
    return false;
  }

  MissedShot(outcome, board, coords) {
    if (outcome === true) {
      this.highlightMissedShot(board, coords);
      return true;
    }

    return false;
  }

  highlightShipHit(board, coords) {
    board.querySelector(`[data-coord="${coords}"]`).classList.add("ship-hit");
  }

  highlightMissedShot(board, coords) {
    board
      .querySelector(`[data-coord="${coords}"]`)
      .classList.add("missed-shot");
  }

  highlightSunkShip(ship, board) {
    ship.coordinatesHit.forEach((coord) => {
      board
        .querySelector(`[data-coord="${coord[0]}-${coord[1]}"]`)
        .classList.remove("ship-hit");
      board
        .querySelector(`[data-coord="${coord[0]}-${coord[1]}"]`)
        .classList.add("sunk-ship");
    });
  }

  checkGameOver(board) {
    if (board.AllShipsSunk()) {
      let startBtn = document.querySelector(".start-game-btn");
      let headline = document.querySelector(".headline");

      headline.textContent = `Winner is: ${this.currentPlayer}`;
      headline.classList.toggle("hidden");

      startBtn.textContent = "Let's Play Again";
      startBtn.classList.toggle("hidden");

      this.resetGame();
      return;
    }
  }

  startGame() {
    this.initializeBoards();
    this.currentPlayer = "player";
    this.switchBoard();
  }

  resetGame() {
    this.pBoard.textContent = "";
    this.cBoard.textContent = "";
    this.playerGameBoard.resetBoard();
    this.computerGameBoard.resetBoard();
  }
}
