import Gameboard from "./gameboard";

const SIZE = 10;

export default class GameDOM {
  /*
   *TODO:
      1- Mark missed shots location
      2- allow attacks only on non-clicked cells
      3- highlight hit shots
      4- highlight sunk ships
      5- GameDOM comments  
   */

  constructor(playerGameBoard, computerGameBoard) {
    this.pBoard = document.querySelector(".left");
    this.cBoard = document.querySelector(".right");
    this.currentPlayer = null;
    this.playerGameBoard = playerGameBoard;
    this.computerGameBoard = computerGameBoard;
  }

  initializeBoards() {
    this.pBoard.addEventListener("click", (e) => {
      this.currentPlayer == "computer" ? this.computerAttack(e) : null;
    });

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
    this.currentPlayer === "player"
      ? (this.currentPlayer = "computer")
      : (this.currentPlayer = "player");
  }

  computerAttack(e) {
    let coords = e.target.dataset.coord;
    this.playerGameBoard.recieveAttack(coords);
    this.checkGameOver(this.playerGameBoard);
    this.switchTurn();
    this.switchBoard();
  }

  playerAttack(e) {
    let coords = e.target.dataset.coord;
    this.computerGameBoard.recieveAttack(coords);
    this.checkGameOver(this.computerGameBoard);
    this.switchTurn();
    this.switchBoard();
  }

  checkGameOver(board) {
    if (board.AllShipsSunk()) {
      console.log(`Winner is: ${this.currentPlayer}`);
      let startBtn = document.querySelector(".start-game-btn");
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
