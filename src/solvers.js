/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var matrix = [];
  for (var i = 0; i < n; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  for (k = 0; k < n; k++) {
    matrix[k][k] = 1;
  }
  return matrix;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  var newMatrix = function(n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n; j++) {
        row.push(null);
      }
      matrix.push(row);
    }
    return matrix;
  };

  var restrictedRows = {};
  var restrictedCols = {};
  var rooks = 0;
  var startRowI = 0;
  var startColI = 0;
  var placeRooks = function(rowI, colI) {
    var matrix = newMatrix(n);
    // console.log('matrix = ', matrix);
    debugger;
    matrix[rowI][colI] = 1;
    debugger;
    restrictedRows[rowI] = rowI;
    restrictedCols[colI] = colI;
    rooks = 1;
    for (var k = 0; k < n; k++) { // row index
      for (var l = 0; l < n; l++) { // column index
        if (matrix[k][l] !== 1) {
          if (restrictedRows[k] !== undefined && restrictedCols[l] !== undefined) {
            matrix[k][l] = 1;
            rooks++;
          }
          restrictedRows[k] = k; //this should move up
          restrictedRows[l] = l; //this should move up
        }
      }
    }
    if (rooks === n) {
      solutionCount++;
    }

    if (startColI < n - 1 && startRowI < n - 1) {

      if (startColI < n) {
        startColI++;
      } else {
        startRowI++;
        startColI = 0;
      }
      restrictedRows = {};
      restrictedCols = {};
      placeRooks(startRowI, startColI);
    }
  };
  placeRooks(startRowI, startColI);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
