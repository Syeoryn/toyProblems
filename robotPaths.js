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
