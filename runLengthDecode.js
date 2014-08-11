// Write a method that decodes a run length encoding
// example:  input: 3a2b6cd2ba
//           output: aaabbccccccdbba

var runLengthDecode = function(encoding){
  decoding = '';
  var letters = x.match(/\d*\w/g);
  
  for(var set = 0; set < letters.length; set++){
    // '3a'
    var letter = letters[set].slice(-1);
    var count = letters[set].slice(0,letters[set].length - 1);
    do{
      decoding += letter;
      count--;
    } while(count > 0)
  }

  return decoding;
}
