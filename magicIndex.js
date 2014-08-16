// A magic index is an array index where i === array[i]
// Write a function to find all magic indices of a sorted
// array with distinct values

var findMagicIndex = function(array){
  // store the magic indices in an array
  var magicIndices = [];
  // since the input array is sorted, only check as long as 
  // array[i] <= i.  If this condition is ever false, then
  // it will necessarily continue to be false in a sorted array
  for(var i = 0; array[i] <= i; i++){
    // add each magic index to storage
    if(i === array[i]) magicIndices.push(i);
  }
  // return the storage array
  return magicIndices;
}
