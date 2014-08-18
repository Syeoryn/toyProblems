// Imagine a robot is sitting in the upper left corner of an M x N board.
// moving only right or down, how many paths could the robot take to get
// to the bottom right corner?

var easyRobotPaths = function(m, n, x, y){
  n = n || m;
  x = x || 0;
  y = y || 0;
  var count = 0;

  // if robot is at lower right corner
  if(x === m - 1 && y === n - 1){
    // increment count
    count++;
  }

  // if robot can move right
  if(x < m){
    // move right
    count += easyRobotPaths(m, n, x + 1, y);
  }

  // if robot can move down
  if(y < n){
    // move down
    count += easyRobotPaths(m, n, x, y + 1);
  }

  return count;
}


// Reimplement robotPaths to allow the robot to move 
// up or left as well as right and down, but cannot
// visit the same place twice.

var robotPaths = function(m, n){
  n = n || m;
  // keep a counter for the completed paths
  var pathCount = 0;
  // make a board to track where the robot has been
  board = makeBoard(m, n);

  // helper function to count all the paths
  var countPaths = function(x, y){
    // toggle current location
    board.togglePiece(x, y);

    // if the current location is the bottom right corner
    if(x === m - 1 && y === n - 1){
      // increment pathCount
      board.togglePiece(x, y);
      // and exit
      return pathCount++;
    }

    // if robot can move right
    // (robot can move right if that space exists and has not yet been occupied.
    //  spaces on the board are either true or false, whereas spaces not on the 
    //  board will be undefined.)
    if(board[y] && board[y][x + 1] === false){
      // recurse right
      countPaths(x + 1, y);
    }
    // if robot can move down
    if(board[y + 1] && board[y + 1][x] === false){
      // recurse down
      countPaths(x, y + 1);
    }
    // if robot can move left
    if(board[y] && board[y][x - 1] === false){
      // recurse left
      countPaths(x - 1, y);
    }
    // if robot can move up
    if(board[y - 1] && board[y - 1][x] === false){
      // recurse up
      countPaths(x, y - 1);
    }

    // return board to previous state by toggling location again
    board.togglePiece(x, y);
  }

  countPaths(0, 0);
  return pathCount;
}


var makeBoard = function(n, m){
  board = [];
  for(var i = 0; i < m; i++){
    board.push([]);
    for(var j = 0; j < n; j++){
      board[i].push(false);
    }
  }

  board.togglePiece = function(x, y){
    board[y][x] = !board[y][x];
  }

  return board;
}
