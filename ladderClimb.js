// Imagine you have a ladder with n rungs.  You can go up the ladder
// either 1, 2, or 3 rungs at a time.  How many possible paths are
// there to get to the top rung?

var ladderClimb = function(n, currentRung){
  var count = 0;
  currentRung = currentRung || 0;
  if(currentRung === n) return 1;

  for(var i = 3; i > 0; i--){
    if(n - currentRung >= i) count += ladderClimb(n, currentRung + i);
  }

  return count;
}
