
//Moving Down
function moveDown(game) {
  gridTranspose(game);
  moveRight(game, false);
  gridTranspose(game);
}

// Moving Right
function moveRight(game) {

  var mergeRight = function (row) {
    var lastNonZeroCellIndex = row.length - 1;
    for (var index = row.length - 1; index > 0; index--) {
      lastNonZeroCellIndex = (row[index] === 0) ? lastNonZeroCellIndex : index;
      if (row[lastNonZeroCellIndex] === row[index - 1]) {
        row[index - 1] += row[index - 1];
        game.updateScoreAndCheckForWinningPoint(row[index - 1]);
        row[lastNonZeroCellIndex] = 0;
        index = index - 1;
        lastNonZeroCellIndex = index - 1;
      }
    }
  };

  var shiftRight = function (row) {
    var count = row.length - 1;
    for (var index = row.length - 1; index >= 0; index--) {
      if (row[index] !== 0) {
        row[count--] = row[index];
      }
    }
    while (count >= 0) {
      row[count--] = 0;
    }
  };

  game.grid.cells.forEach(function (row) {
    mergeRight(row);
    shiftRight(row);
  });
}

// Moving Up
function moveUp(game) {
  gridTranspose(game);
  moveLeft(game, false);
  gridTranspose(game);
}

// Moving Left
function moveLeft(game) {

  var shiftLeft = function (row) {
    var count = 0;
    for (var index = 0; index < row.length; index++) {
      if (row[index] !== 0) {
        row[count++] = row[index];
      }
    }
    while (count < row.length) {
      row[count++] = 0;
    }
  };

  var mergeLeft = function (row) {
    var lastNonZeroCellIndex = 0;
    for (var index = 0; index < row.length - 1; index++) {
      lastNonZeroCellIndex = (row[index] === 0) ? lastNonZeroCellIndex : index;
      if (row[lastNonZeroCellIndex] === row[index + 1]) {
        row[index + 1] += row[index + 1];
        game.updateScoreAndCheckForWinningPoint(row[index + 1]);
        row[lastNonZeroCellIndex] = 0;
        index = index + 1;
        lastNonZeroCellIndex = index + 1;
      }
    }
  };

  game.grid.cells.forEach(function (row) {
    mergeLeft(row);
    shiftLeft(row);
  });
}

// Grid Transpose for up and down movements.
function gridTranspose(game) {
  for (var x = 0; x < game.size; x++) {
    for (var y = 0; y <= x; y++) {
      var temp = game.grid.cells[x][y];
      game.grid.cells[x][y] = game.grid.cells[y][x];
      game.grid.cells[y][x] = temp;
    }
  }
}


