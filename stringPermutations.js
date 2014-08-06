// Write a function that determines if two strings
// are permutations of each other.

var stringPermutations = function(string1, string2){
  // if the two strings aren't the same length, they can't be permutations
  if(string1.length !== string2.length) return false;

  // each string must have the same number of the same letters
  // to be permutations of each other

  // create storage for letters from each string
  var letterSet1 = {};
  var letterSet2 = {};

  // helper function to add letter to set
  // or increment its letterCount if already in the set
  var incrementLetterCount = function(letter, set){
    if(letter in set){
      set[letter]++;
    } else {
      set[letter] = 1;
    }
    return set;
  }

  // for each letter in each string (because both strings have the same length),
  // add the letter to its respective letterSet, or increment its count
  for(var i = 0; i < string1.length; i++){
    incrementLetterCount(string1[i], letterSet1);
    incrementLetterCount(string2[i], letterSet2);
  }

  // then check if the two letterSets are equal to each other
  for(var letterCount in letterSet1){
    // if any letter does not have the same count in both sets,
    // the strings are not permutations
    if(letterSet2[letterCount] !== letterSet1[letterCount]){
      return false;
    }
  }
  // in any remaining case, the strings are permutations
  return true;
}