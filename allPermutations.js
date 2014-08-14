// Write a function that returns a list of all permutations of a string
// example: string-- 'abc'
//          permutations-- ['abc','acb','bac','bca','cab','cba']

var allPermutations = function(string, permutations, current){
  var permutations = permutations || [];
  var current = current || '';

  if(!string) permutations.push(current);

  for(var i = 0; i < string.length; i++){
    allPermutations(string.slice(0,i) + string.slice(i+1), permutations, current + string[i]);
  }

  return permutations;
}
