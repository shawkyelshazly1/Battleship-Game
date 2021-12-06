import Ship from "./ship";

const SIZE = 10;

export default class Gameboard {
  // Class Constructor
  constructor() {
    this.board = [];
    this.missedShots = [];
    this.initializeBoard();
    this.ships = [];
  }

  // Initializing the board 2D array with null values & missed shots with false value
  initializeBoard() {
    for (let i = 0; i < SIZE; i++) {
      this.board[i] = [];
      this.missedShots[i] = [];
      for (let j = 0; j < SIZE; j++) {
        this.board[i][j] = null;
        this.missedShots[i][j] = false;
      }
    }
  }

  // Add new ship on the board if position is allowed vertically or horizontally
  addShip(ship, position, alignment) {
    let pos = this.transformPosition(position);
    switch (alignment) {
      case "horizontal":
        if (
          this.possiblePlacementHorizontal(pos[0], pos[1], ship.getLength())
        ) {
          this.placeShipHorizontal(ship, pos[0], pos[1]);
          this.ships.push(ship);
          return true;
        } else {
          return false;
        }
        break;
      case "vertical":
        if (this.possiblePlacementVertical(pos[0], pos[1], ship.getLength())) {
          this.placeShipVertical(ship, pos[0], pos[1]);
          this.ships.push(ship);
          return true;
        } else {
          return false;
        }
        break;
      default:
        break;
    }
  }

  // Helper function to add ship in positions on board horizontally
  placeShipHorizontal(ship, row, column) {
    for (let i = 0; i < ship.getLength(); i++) {
      this.board[row][column + i] = ship;
    }
  }

  // Helper function to add ship in positions on board vertically
  placeShipVertical(ship, row, column) {
    for (let i = 0; i < ship.getLength(); i++) {
      this.board[row + i][column] = ship;
    }
  }

  // Helper Function
  // transform String position to array of row & column
  transformPosition(position) {
    let [row, column] = position.split("-");
    return [Number(row), Number(column)];
  }

  // Checking possible placement for horizontal axis
  possiblePlacementHorizontal(row, column, length) {
    // Checking if position exceeds the board edges 'invalid position'
    if (row < 0 || column < 0 || row > SIZE - 1 || column > SIZE - 1)
      return false;

    // Checking if the ship length exceeds the positions
    if (column + length > SIZE) return false;

    // Checking if placement positions are not empty
    for (let i = 0; i < length; i++) {
      if (this.board[row][column + i] !== null) return false;
    }

    /*
     * Checking for neighbours to disallow placment unless 1 position away each direction including diagonal
     */

    // Checking row above
    if (row > 0) {
      for (let i = 0; i < length; i++) {
        if (this.board[row - 1][column + i] !== null) return false;
      }
    }

    // Checking row below
    if (row < SIZE - 1) {
      for (let i = 0; i < length; i++) {
        if (this.board[row + 1][column + i] !== null) return false;
      }
    }

    //checking block left
    if (column > 0) {
      if (this.board[row][column - 1] !== null) return false;
    }

    //checking block right
    if (column + length <= SIZE - 1) {
      if (this.board[row][column + length] !== null) return false;
    }

    // Checking digonal left side
    if (column > 0) {
      if (row > 0) {
        if (this.board[row - 1][column - 1] !== null) return false;
      }

      if (row < SIZE - 1) {
        if (this.board[row + 1][column - 1] !== null) return false;
      }
    }

    // Checking digonal right side
    if (column + length <= SIZE - 1) {
      if (row > 0) {
        if (this.board[row - 1][column + length] !== null) return false;
      }
      if (row < SIZE - 1) {
        if (this.board[row + 1][column + length] !== null) return false;
      }
    }

    return true;
  }

  // Checking possible placement for vertical axis
  possiblePlacementVertical(row, column, length) {
    // Checking if position exceeds the board edges 'invalid position'
    if (row < 0 || column < 0 || row > SIZE - 1 || column > SIZE - 1)
      return false;

    // Checking if the ship length exceeds the positions
    if (row + length > SIZE) return false;

    // Checking if placement positions are not empty
    for (let i = 0; i < length; i++) {
      if (this.board[row + i][column] !== null) return false;
    }

    /*
     * Checking for neighbours to disallow placment unless 1 position away each direction including diagonal
     */

    //checking column right
    if (column < SIZE - 1) {
      for (let i = 0; i < length; i++) {
        if (this.board[row + i][column + 1] !== null) return false;
      }
    }

    //checking column left
    if (column > 0) {
      for (let i = 0; i < length; i++) {
        if (this.board[row + i][column - 1] !== null) return false;
      }
    }

    // Checking block above
    if (row > 0) {
      if (this.board[row - 1][column] !== null) return false;
    }

    // Checking block below
    if (row + length <= SIZE - 1) {
      if (this.board[row + length][column] !== null) return false;
    }

    // Checking digonal above
    if (row > 0) {
      if (column > 0) {
        if (this.board[row - 1][column - 1] !== null) return false;
      }
      if (column < SIZE - 1) {
        if (this.board[row - 1][column + 1] !== null) return false;
      }
    }

    // Checking digonal below
    if (row + length <= SIZE - 1) {
      if (column > 0) {
        if (this.board[row + length][column - 1] !== null) return false;
      }
      if (column < SIZE - 1) {
        if (this.board[row + length][column + 1] !== null) return false;
      }
    }

    return true;
  }

  // Recieve Attack function based on clicked position, and adds it as true to missedShots if empty location
  recieveAttack(pos) {
    let position = this.transformPosition(pos);
    if (this.board[position[0]][position[1]] !== null) {
      let targetedShip = this.board[position[0]][position[1]];
      if (targetedShip.hit(position)) {
        return targetedShip;
      } else {
        return false;
      }
    } else if (!this.missedShots[position[0]][position[1]] === true) {
      this.missedShots[position[0]][position[1]] = true;
      return true;
    }
    return false;
  }

  // Checks if all ships have been sunk
  AllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  // Printing board visualization
  printBoard() {
    let output = "";
    for (let i = 0; i < SIZE; i++) {
      output += "[";
      for (let j = 0; j < SIZE; j++) {
        output += this.board[i][j] + " , ";
      }
      output += "]\n";
    }

    console.log(output);
  }

  // placing ships randomly on the board
  placeRandomShips() {
    let i = 0;
    let shipsLength = [5, 4, 3, 3, 2];
    while (shipsLength.length > 0) {
      let row = Math.floor(Math.random() * SIZE);
      let col = Math.floor(Math.random() * SIZE);
      let alignment = parseInt(Math.random() * 2) ? "horizontal" : "vertical";
      let outcome = this.addShip(
        new Ship(shipsLength[i], row, col, alignment),
        `${row}-${col}`,
        alignment
      );
      if (outcome) {
        shipsLength.shift();
      }
    }
  }

  // resetting board by initializing the constructor again
  resetBoard() {
    this.board = [];
    this.missedShots = [];
    this.initializeBoard();
    this.ships = [];
    
  }
}
