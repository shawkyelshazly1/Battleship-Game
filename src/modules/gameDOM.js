import Gameboard from "./gameboard";
import Ship from "./ship";

const SIZE = 10;

export default class GameDOM {
  // Constructor, querying both boards, setting current player var, @params: players GameBoards
  constructor(playerGameBoard, computerGameBoard) {
    this.pBoard = document.querySelector(".left");
    this.cBoard = document.querySelector(".right");
    this.currentPlayer = null;
    this.playerGameBoard = playerGameBoard;
    this.computerGameBoard = computerGameBoard;
    this.computerGameBoard.placeRandomShips();
  }

  // Initializing both boards visuals with divs, allowing computer board to recieve click event with playerAttack
  // setting coordinates as data-coord "dataset" on each div
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

  // Helper Function:: switching active board to recieve attack based on current player turn
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

  // Helper Function:: disabling board if won't recieve attack "for visualization only", @params: targeted board
  disableFields(board) {
    let elementNodes = [...board.children];
    elementNodes.forEach((node) => {
      node.classList.add("disabled");
    });
  }

  // Helper Function:: enabling board to recieve attack "for visualization only" , @params: targeted board
  enableFields(board) {
    let elementNodes = [...board.children];
    elementNodes.forEach((node) => {
      node.classList.remove("disabled");
    });
  }

  // Helper Function:: switching player turn by setting currentPlayer variable as well as playing computerAttack on it's turn
  switchTurn() {
    if (this.currentPlayer === "player") {
      this.currentPlayer = "computer";
      this.computerAttack();
    } else {
      this.currentPlayer = "player";
    }
  }

  // computer attack by generating random coordinates with recursive call till a successful or missed shot.
  // checking if all ships sunk to gameover as well as switching turns & boards on missed shots
  computerAttack() {
    let row = Math.floor(Math.random() * SIZE);
    let col = Math.floor(Math.random() * SIZE);
    let coords = `${row}-${col}`;

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

  // player attack on board click event, @params: coordinates from targeted element dataset "data-coord"
  // checking if all ships sunk to gameover as well as switching turns & boards on missed shots
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

  // Helper Function: checking if shot was successful by checking if outcome is a Ship instance as well as checking if ship is sunk or not
  // highlights the ship hit or the ship if sunk
  // @params: outcome: recieveAttack function return, targeted board, coordinates hit
  successfulShot(outcome, board, coords) {
    if (outcome instanceof Ship) {
      outcome.isSunk()
        ? this.highlightSunkShip(outcome, board)
        : this.highlightShipHit(board, coords);
      return true;
    }
    return false;
  }

  //checking if shot was a missed shot if outcome param is true to highlight the cell
  // @params: outcome: recieveAttack function return, targeted board, coordinates hit
  MissedShot(outcome, board, coords) {
    if (outcome === true) {
      this.highlightMissedShot(board, coords);
      return true;
    }

    return false;
  }

  // Helper Function: highlighting the ship hit by setting class on the cell
  // @params: targeted board, coordinates
  highlightShipHit(board, coords) {
    board.querySelector(`[data-coord="${coords}"]`).classList.add("ship-hit");
  }

  // Helper Function: highlighting the missed shot by setting class on the cell
  // @params: targeted board, coordinates
  highlightMissedShot(board, coords) {
    board
      .querySelector(`[data-coord="${coords}"]`)
      .classList.add("missed-shot");
  }

  // Helper Function: highlighting the sunk ship by setting class on the ship cells placement
  // @params: ship object, targeted board
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

  // Helper Function: checking if game is over by checking if all ships on targeted board are sunk
  // @params: targeted board
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

  // start game function to initialize the board and setting the starting current player
  startGame() {
    this.initializeBoards();
    this.currentPlayer = "player";
    this.switchBoard();
  }

  // reset game function to reset all boards as well as player's game boards
  resetGame() {
    this.pBoard.textContent = "";
    this.cBoard.textContent = "";
    this.playerGameBoard.resetBoard();
    this.computerGameBoard.resetBoard();
  }
}
