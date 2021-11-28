export default function createShip(size, position) {
  return {
    size, // The ship length
    position, // Array  the positions of the ship SAMPLE: ['1-A', '1-B']
    hits: [], // positions that have benn hit
    hit: function (index) {
      // Hit function that takes  the location got hit and stores it in the array SAMPLE: '1-A'
      this.hits.push(index);
    },
    isSunk: function () {
      // return true||false if all positions been hit
      return this.position.every((pos) => {
        return this.hits.includes(pos);
      });
    },
  };
}
