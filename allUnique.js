// Write a function to determine if every character
// in a string is unique.

var allUnique = function(string){
  var characters = {};
  for(var i = 0; i < string.length; i++){
    if(string[i] in characters) return false;
    characters[string[i]] = true;
  }
  return true;
}


// What if you can't use additional data structures?

var allUniqueCharacters = function(string){
  for(var i = 0; i < string.length; i++){
    if( ~string.indexOf(string[i], i + 1) ) return false;
  }
  return true;
}

// Without additional data structures, the time complexity 
// become O(n^2) rather than O(n).
