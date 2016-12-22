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
  var callCount = 0;
  var solutionsArr = [];
  var pickNext = function() {
    
    var choices = _.range(0, n);
    var previousRooks = [...arguments];
    // for (var k = 0; k < arguments.length; k++) {
    //   previousRooks[k] = arguments[k];
    // }999
    // console.log('previousRooks:', previousRooks);
    for (var i = 0; i < choices.length; i++) { // iterate through previousRooks and place previous rooks and remove those positions from choices
      if (previousRooks.indexOf(choices[i]) !== -1) {
        choices.splice(i, 1);
        i--;
      }
    }
    for (var j = 0; j < choices.length; j++) { // iterate through choices and place next rooks
      let nextRook = [...previousRooks];
      nextRook.push(choices[j]); //place rook
      if (choices.length > 1) {
        callCount++;
        pickNext(...nextRook); //place next rook
      } else {
        solutionCount++;
        solutionsArr.push(nextRook); //end
      }
    }
  };
  if (n === 0 || n === 1) {
    return 1;
  }
  for (var i = 0; i < n; i++) {
    callCount++;
    // console.log('calling on i = ', i);
    pickNext(i);
  }
  // console.log('all solutions: ', solutionsArr);
  console.log('n = ', n, ' and solutionCount = ', solutionCount, 'callCount = ', callCount);
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

  // var newMatrix = function(n) {
  //   var matrix = [];
  //   for (var i = 0; i < n; i++) {
  //     var row = [];
  //     for (var j = 0; j < n; j++) {
  //       row.push(null);
  //     }
  //     matrix.push(row);
  //   }
  //   return matrix;
  // };
  // var restrictedRows = {};
  // var restrictedCols = {};
  // var rooks = 0;
  // var startRowI = 0;
  // var startColI = 0;
  // var placeRooks = function(rowI, colI) {
  //   var matrix = newMatrix(n);
  //   matrix[rowI][colI] = 1;
  //   restrictedRows[rowI] = rowI;
  //   restrictedCols[colI] = colI;
  //   rooks = 1;
  //   for (var k = 0; k < n; k++) { // row index
  //     for (var l = 0; l < n; l++) { // column index
  //       if (matrix[k][l] !== 1) {
  //         if (restrictedRows[k] !== undefined && restrictedCols[l] !== undefined) {
  //           matrix[k][l] = 1;
  //           rooks++;
  //         }
  //         restrictedRows[k] = k; //this should move up
  //         restrictedRows[l] = l; //this should move up
  //       }
  //     }
  //   }
  //   if (rooks === n) {
  //     solutionCount++;
  //   }
  //   if (startColI < n - 1 && startRowI < n - 1) {

  //     if (startColI < n) {
  //       startColI++;
  //     } else {
  //       startRowI++;
  //       startColI = 0;
  //     }
  //     restrictedRows = {};
  //     restrictedCols = {};
  //     placeRooks(startRowI, startColI);
  //   }
  // };
  // placeRooks(startRowI, startColI);
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);