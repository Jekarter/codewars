/* 
  6 kyu Find the odd int

  DESCRIPTION:
  Given an array of integers, find the one that appears an odd number of times.

  There will always be only one integer that appears an odd number of times.

  Examples
  [7] should return 7, because it occurs 1 time (which is odd).
  [0] should return 0, because it occurs 1 time (which is odd).
  [1,1,2] should return 2, because it occurs 1 time (which is odd).
  [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
  [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

  *FUNDAMENTALS
*/

// My solutions

function findOdd(A) {
  let obj = new Object();
  
  A.forEach(element => {
    obj[element] ? obj[element] +=1 : obj[element] = 1;
  });
  
  let keys = Object.keys(obj);
  
  for(let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] % 2 !== 0) {
      return Number(keys[i])
    }
  }
};


// Best Practices

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
