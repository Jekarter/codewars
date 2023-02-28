/* 
  6 kyu Highest Scoring Word

  DESCRIPTION:
  Given a string of words, you need to find the highest scoring word.

  Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

  For example, the score of abad is 8 (1 + 2 + 1 + 4).

  You need to return the highest scoring word as a string.

  If two words score the same, return the word that appears earliest in the original string.

  All letters will be lowercase and all inputs will be valid.

  *FUNDAMENTAL *SSTRINGS *ARRAYS
*/

// My solutions

function high(x){
  let obj = new Object();
  let string = x.split(' ');

  for (let i = 0; i < string.length; i++) {
    let word = string[i];
    obj[word] = 0;

    for(let letter in word) {
      obj[word] += word[letter].charCodeAt() - 96;
    }
  }
  let maxValue = Math.max.apply(null, Object.values(obj));

  return Object.keys(obj).filter(key => obj[key] == maxValue)[0];
}


// Best Practices

function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
