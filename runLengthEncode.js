// Write a method that run length encodes a string.
// example:  input: aaabbccccccdbba
//           output: 3a2b6cd2ba
// If the output would be longer than the input,
// return the input

var runLengthEncode = function(string){
  // create an empty string in which to form the run length encoding
  var encoded = '';
  // maintain the current letter
  var letter = string[0];
  // and its count
  var count = 1;

  // check every character in the string
  for(var i = 1; i < string.length + 1; i++){
    // if the current letter is the same as the last
    if(string[i] === letter){
      // only increment the count
      count++;
    } else {
      // otherwise add the current count to the string if greater than 1
      if(count > 1) encoded += count;
      // and now the current letter
      encoded += letter;
      // and reset the letter and count for the new letter
      letter = string[i];
      count = 1;
    }
  }
  // no need to check if the encoding length is less than the original length
  // because it can't be longer since no number is used when there's only one
  // of a character  (in the example above, 3a2b6cd2ba rather than 3a2b6c1d2b1a)
  return encoded;
}