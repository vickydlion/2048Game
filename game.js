//Game Class Implementation
function Game(size, maxWinningPoint) {
  this.size = size;
  this.maxWinningPoint = maxWinningPoint;
  this.bestScore = 0;
  this.init();
}

// Game ReStart Trigger
Game.prototype.reStart = function () {
  this.init();
};

// Game Initialization
Game.prototype.init = function () {
  this.grid = new Grid(this.size);
  this.gameOver = false;
  this.gameWon = false;
  this.score = 0;
  this.initTiles();
  this.grid.printGrid();
  console.log("Your Score :" + this.score);
  console.log("Your Best Score :" + this.bestScore);
};

// Game Adding random Selected two cells
Game.prototype.initTiles = function () {
  for (var i = 0; i < 2; i++) {
    this.addRandomTile();
  }
};

//Adding random tile to grid
Game.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var gridValues = [2, 4];
    var value = gridValues[getRandomIntInRange(gridValues.length)];
    var randomAvailableCellCoOrdinates = this.grid.randomAvailableCell();
    this.grid.insertTile(randomAvailableCellCoOrdinates.x, randomAvailableCellCoOrdinates.y, value);
  }
  else {
    this.gameOver = true;
    this.bestScore = this.score;
    console.log("Game Over. Please Start a New Game");
  }
};

Game.prototype.updateScoreAndCheckForWinningPoint = function (score) {
  this.score += score;
  if (score === this.maxWinningPoint) {
    this.gameWon = true;
    this.bestScore = this.score;
    console.log("Congratulations!!! You Have Won The Game!");
    console.log("Your Score :", this.score);
  }
};


// Game moves "up, down, left and right"
Game.prototype.move = function (direction) {

  if (this.gameOver || this.gameWon) {
    if (this.gameOver) {
      this.grid.printGrid();
      console.log("Your Score :" + this.score);
      console.log("Your Best Score :" + this.bestScore);
      return "Game Over. Please Start a New Game";
    }

    if (this.gameWon) {
      this.grid.printGrid();
      console.log("Your Score :" + this.score);
      console.log("Your Best Score :" + this.bestScore);
      return "Congratulations!!! You Have Won The Game!";
    }
  }
  else {
    switch (direction) {
      case 1:
        console.log("Moving Left!");
        moveLeft(this);
        break;
      case 2:
        console.log("Moving Right!");
        moveRight(this);
        break;
      case 3:
        console.log("Moving Up!");
        moveUp(this);
        break;
      case 4:
        console.log("Moving Down!");
        moveDown(this);
        break;
      default:
        return new Error("Input should not be less than 1 or greater than 4.");
    }
    this.addRandomTile();
    this.grid.printGrid();
    console.log("Your Score : " + this.score);
    console.log("Your Best Score : " + this.bestScore);
  }
};









