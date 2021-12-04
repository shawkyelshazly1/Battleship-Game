export default class Ship {
  constructor(length, startRow, startCol, alignment) {
    this.length = length; // Ship length
    this.hits = []; // Tracks positions been hit in the ship
    this.startRow = startRow;
    this.startCol = startCol;
    this.alignment = alignment;
    this.coordinatesHit = [];
  }

  // adds the position hit to the hits list if matches the critiera, coordinates: "1-2" ("row-column")
  hit(coordinates) {
    let position = null;
    switch (this.alignment) {
      case "horizontal":
        position = coordinates[1] - this.startCol;
        break;
      case "vertical":
        position = coordinates[0] - this.startRow;
        break;
      default:
        break;
    }

    if (
      this.hits.includes(position) ||
      position < 0 ||
      position >= this.length
    ) {
      return false;
    }
    this.hits.push(position);
    this.coordinatesHit.push(coordinates);
    return true;
  }

  // returns true or false if all hits positions in the ship matches the length
  isSunk() {
    return this.hits.length === this.length;
  }

  // Returns ship's length
  getLength() {
    return this.length;
  }
}
