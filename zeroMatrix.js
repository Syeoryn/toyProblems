// Write an algorithm such that if an element of an m x n matrix is 0,
// its entire row and column are set to 0

var zeroMatrix = function(matrix){
  var zeroRows = {};
  var zeroColumns = {};

  for(var row = 0; row < matrix.length; row ++){
    for(var column = 0; column < matrix[0].length; column++){
      if(matrix[row][column] === 0){
        zeroRows[row] = true;
        zeroColumns[column] = true;
      }
    }
  }

  for(row in zeroRows){
    for(var i = 0; i < matrix.length; i++){
      matrix[row][i] = 0;
    }
  }

  for(column in zeroColumns){
    for(var i = 0; i < matrix[0].length; i++){
      matrix[i][column] = 0;
    }
  }

  return matrix;
}