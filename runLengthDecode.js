// Write a method that decodes a run length encoding
// example:  input: 3a2b6cd2ba
//           output: aaabbccccccdbba

var runLengthDecode = function(encoding){
  decoding = '';
  // split the encoding into number-letter pairs
  var letters = x.match(/\d*\w/g);
  
  // for each pair
  for(var set = 0; set < letters.length; set++){
    var letter = letters[set].slice(-1);
    var count = letters[set].slice(0,letters[set].length - 1);
    do{
      // add the letter
      decoding += letter;
      count--;
      // count times
    } while(count > 0)
  }

  return decoding;
}
