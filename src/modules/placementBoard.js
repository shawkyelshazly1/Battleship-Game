const SIZE = 10;

import Gameboard from "./gameboard";
import Ship from "./ship";

export default class PlacementBoard {
  /*
   *TODO:
      1- GameDOM comments 
      2- Allow drag & drop of ships 
   */

  // Class Constructor
  constructor(gameDom) {
    this.placementAlignment = "vertical";
    this.shipsLength = [5, 4, 3, 3, 2];
    this.gameDom = gameDom;
    this.changeAlignmentBtn = document.querySelector(".change-alignment-btn");
    // Change aligment on btn click
    this.changeAlignmentBtn.addEventListener("click", () => {
      this.changeALignment();
    });
  }

  startPlacement() {
    this.createPlacementBoard();
  }

  // Creating Visual placement board modal
  createPlacementBoard() {
    this.placementModal = document.querySelector("#selection-modal");
    this.placementBoard = new Gameboard();
    this.initializePlacementBoard();
    this.placementModal.style.display = "block";
  }

  // Initializing placement board cells
  initializePlacementBoard() {
    this.placementBoardVisual = document.querySelector(".placement-board");
    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        let div = document.createElement("div");
        div.classList.add("placement-board-cell");
        div.setAttribute("data-cell", `${row}-${col}`);

        div.addEventListener("mouseover", (e) => {
          let pos = this.placementBoard.transformPosition(
            e.target.dataset.cell
          );
          this.highlightCells(pos);
        });

        div.addEventListener("click", (e) => {
          let pos = e.target.dataset.cell;

          this.placedShip(pos) ? this.shipsLength.shift() : null;
          this.isPlacementDone() ? this.startActualGame() : null;
        });

        this.placementBoardVisual.appendChild(div);
      }
    }
    this.placementBoardVisual.addEventListener("mouseleave", () => {
      this.removeHighlightedCells();
    });
  }

  changeALignment() {
    switch (this.placementAlignment) {
      case "horizontal":
        this.placementAlignment = "vertical";
        this.changeAlignmentBtn.textContent = `Alignment: ${this.placementAlignment}`;
        break;
      case "vertical":
        this.placementAlignment = "horizontal";
        this.changeAlignmentBtn.textContent = `Alignment: ${this.placementAlignment}`;
        break;

      default:
        break;
    }
  }

  checkPlacementPossibility(pos) {
    let isPossible = false;
    switch (this.placementAlignment) {
      case "horizontal":
        isPossible = this.placementBoard.possiblePlacementHorizontal(
          pos[0],
          pos[1],
          this.shipsLength[0]
        );
        break;
      case "vertical":
        isPossible = this.placementBoard.possiblePlacementVertical(
          pos[0],
          pos[1],
          this.shipsLength[0]
        );
        break;
      default:
        break;
    }
    return isPossible;
  }

  highlightCells(pos) {
    let isPossible = this.checkPlacementPossibility(pos);
    switch (this.placementAlignment) {
      case "horizontal":
        this.highlightHorizontal(pos, isPossible);
        break;
      case "vertical":
        this.highlightvertical(pos, isPossible);
        break;

      default:
        break;
    }
  }

  highlightHorizontal(pos, isPossible) {
    this.removeHighlightedCells();
    for (let i = 0; i < this.shipsLength[0] && i + pos[1] < SIZE; i++) {
      let targetedCell = document.querySelector(
        `[data-cell="${pos[0]}-${pos[1] + i}"]`
      );
      if (isPossible) {
        targetedCell.classList.remove("invalid");
        targetedCell.classList.add("valid");
      } else {
        targetedCell.classList.remove("valid");
        targetedCell.classList.add("invalid");
      }
    }
  }

  highlightvertical(pos, isPossible) {
    this.removeHighlightedCells();
    for (let i = 0; i < this.shipsLength[0] && i + pos[0] < SIZE; i++) {
      let targetedCell = document.querySelector(
        `[data-cell="${pos[0] + i}-${pos[1]}"]`
      );
      if (isPossible) {
        targetedCell.classList.remove("invalid");
        targetedCell.classList.add("valid");
      } else {
        targetedCell.classList.remove("valid");
        targetedCell.classList.add("invalid");
      }
    }
  }

  removeHighlightedCells() {
    let invalidCells = [...document.querySelectorAll(".invalid")];
    invalidCells.forEach((cell) => {
      cell.classList.remove("invalid");
    });
    let validCells = [...document.querySelectorAll(".valid")];
    validCells.forEach((cell) => {
      cell.classList.remove("valid");
    });
  }

  highlightPlacedShip(position) {
    this.removeHighlightedCells();
    switch (this.placementAlignment) {
      case "horizontal":
        for (
          let i = 0;
          i < this.shipsLength[0] && i + position[1] < SIZE;
          i++
        ) {
          let targetedCell = document.querySelector(
            `[data-cell="${position[0]}-${position[1] + i}"]`
          );
          targetedCell.classList.add("placed");
        }
        break;

      case "vertical":
        for (
          let i = 0;
          i < this.shipsLength[0] && i + position[0] < SIZE;
          i++
        ) {
          let targetedCell = document.querySelector(
            `[data-cell="${position[0] + i}-${position[1]}"]`
          );

          targetedCell.classList.add("placed");
        }
        break;

      default:
        break;
    }
  }

  placedShip(pos) {
    let position = this.placementBoard.transformPosition(pos);
    if (this.checkPlacementPossibility(position)) {
      this.highlightPlacedShip(position);
      return this.placementBoard.addShip(
        new Ship(
          this.shipsLength[0],
          position[0],
          position[1],
          this.placementAlignment
        ),
        pos,
        this.placementAlignment
      );
    }
    return false;
  }

  isPlacementDone() {
    return this.shipsLength.length === 0;
  }

  startActualGame() {
    this.placementModal.style.display = "none";
    this.gameDom.playerGameBoard = this.placementBoard;
    this.gameDom.startGame();
  }

  resetPlacementBoard() {
    this.placementAlignment = "horizontal";
    this.changeALignment();
    this.shipsLength = [5, 4, 3, 3, 2];
    this.placementBoardVisual.textContent = "";
    this.placementBoard.resetBoard();
  }
}
