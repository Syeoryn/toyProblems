// Write a method that returns a list of all subsets of a set.
// Assume that all items in a set are unique
// example: set: 'abc'
//          subsets: ['','a','b','c','ab','ac','bc', 'abc']

var allSubsets = function(set, subsets, current){
  var subsets = subsets || [];
  var current = current || '';

  subsets.push(current);

  for(var i = 0; i < set.length; i++){
    allSubsets(set.slice(i + 1), subsets, current + set[i]);
  }

  return subsets;
}
