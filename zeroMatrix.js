// Write an algorithm such that if an element of an m x n matrix is 0,
// its entire row and column are set to 0

var zeroMatrix = function(matrix){
  // maintain unique lists of the rows and columns that need to be zeroed
  var zeroRows = {};
  var zeroColumns = {};

  // for every 0 value in the matrix,
  // add that row/ column to zeroRows/ zeroColumns
  for(var row = 0; row < matrix.length; row ++){
    for(var column = 0; column < matrix[0].length; column++){
      if(matrix[row][column] === 0){
        zeroRows[row] = true;
        zeroColumns[column] = true;
      }
    }
  }

  // zero the rows
  for(row in zeroRows){
    for(var i = 0; i < matrix.length; i++){
      matrix[row][i] = 0;
    }
  }

  // zero the columns
  for(column in zeroColumns){
    for(var i = 0; i < matrix[0].length; i++){
      matrix[i][column] = 0;
    }
  }

  return matrix;
}
