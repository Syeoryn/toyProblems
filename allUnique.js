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
