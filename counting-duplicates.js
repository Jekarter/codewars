/* 
  6 kyu Counting Duplicates

  DESCRIPTION:
  Count the number of Duplicates
  Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

  Example
  "abcde" -> 0 # no characters repeats more than once
  "aabbcde" -> 2 # 'a' and 'b'
  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  "indivisibility" -> 1 # 'i' occurs six times
  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
  "aA11" -> 2 # 'a' and '1'
  "ABBA" -> 2 # 'A' and 'B' each occur twice

  *STRINGS *FUNDAMENTALS 
*/

// My solutions
function duplicateCount(text){
  let obj = new Object();
  let count = 0;
  
  for (let i of text) {
    i = i.toLowerCase();
    obj[i] ? obj[i] += 1 : obj[i] = 1;
  }
  
  for (let j in obj) {
    obj[j] > 1 ? count++ : null;
  }

  return count;
}


// Best Practices
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}