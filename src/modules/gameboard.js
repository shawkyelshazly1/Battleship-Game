const SIZE = 10;

export default class Gameboard {
  constructor() {
    this.board = [];
    this.missedShots = [];
    this.initializeBoard();
  }
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
  placeShip(ship, position, alignment) {
    // Position [row,column]
  }

  transformPosition(position) {
    // Helper Function
    // transform String position to array of row & column
    let [row, column] = position.split("-");
    return [Number(row), Number(column)];
  }

  // TODO: FIX checking empty if on edge

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

    // Checking row above & below
    for (let i = 0; i < length; i++) {
      if (this.board[row - 1][column + i] !== null) return false;
    }
    for (let i = 0; i < length; i++) {
      if (this.board[row + 1][column + i] !== null) return false;
    }

    //checking column right & left
    for (let i = 0; i < 3; i++) {
      if (this.board[row - 1 + i][column - 1] !== null) return false;
    }

    for (let i = 0; i < 3; i++) {
      if (this.board[row - 1 + i][column + length] !== null) return false;
    }

    return true;
  }

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

    //checking column right & left

    for (let i = 0; i < length; i++) {
      if (this.board[row + i][column + 1] !== null) return false;
    }

    for (let i = 0; i < length; i++) {
      if (this.board[row + i][column - 1] !== null) return false;
    }

    // Checking row above & below
    for (let i = 0; i < 3; i++) {
      if (this.board[row - 1][column - 1 + i] !== null) return false;
    }
    for (let i = 0; i < 3; i++) {
      if (this.board[row + length][column - 1 + i] !== null) return false;
    }
  }
}
