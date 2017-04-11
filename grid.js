
// Grid Class Implementation

function Grid(size) {
  this.size = size;
  this.cells = [];
  this.init();
}

Grid.prototype.init = function () {
  for (var x = 0; x < this.size; x++) {
    var row = this.cells[x] = [];

    for (var y = 0; y < this.size; y++) {
      row.push(0);    // Initiating Grid Values with 0
    }
  }
};

Grid.prototype.randomAvailableCell = function () {
  var cells = this.availableCells();

  if (cells.length) {
    return cells[getRandomIntInRange(cells.length)];
  }
};

Grid.prototype.availableCells = function () {
  var cells = [];
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      if (!this.cells[x][y]) {
        cells.push({x: x, y: y});
      }
    }
  }
  return cells;
};

Grid.prototype.cellsAvailable = function () {
  return !!this.availableCells().length;
};

Grid.prototype.insertTile = function (x, y, value) {
  this.cells[x][y] = value;
};

Grid.prototype.printGrid = function () {
  var grid = "\n";
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      grid += this.cells[x][y] + " ";
    }
    grid += "\n";
  }
  console.log(grid);
};
