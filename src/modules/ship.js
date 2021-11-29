export default class Ship {
  constructor(length) {
    this.length = length; // Ship length
    this.hits = []; // Tracks positions been hit in the ship
  }
  hit(position) {
    // adds the position hit to the hits list if matches the critiera, position: "1-2" ("row-column")
    if (
      this.hits.includes(position) ||
      position < 0 ||
      position >= this.length
    ) {
      return;
    }
    this.hits.push(position);
  }
  isSunk() {
    // returns true or false if all hits positions in the ship matches the length
    return this.hits.length === this.length;
  }
  getLength() {
    return this.length;
  }
}
