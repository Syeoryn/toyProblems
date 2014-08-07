// Write a method that replaces all spaces with %20.

var stringEncode = function(string){
  var encodedString = string.replace(/ /g, '%20');
  return encodedString;
}
