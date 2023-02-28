/* 
  6 kyu Count characters in your string

  The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

  What if the string is empty? Then the result should be empty object literal, {}.

  *STRINGS *FUNDAMENTALS
*/

// My Solution:

function count (string) {  
  let obj = new Object();
  let str = string.split('')
  
  str.forEach(element => {
    obj[element] ? obj[element] += 1 : obj[element] = 1;
  })
  
  return obj
}


// Best Practices:

function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
