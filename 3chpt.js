'use strict';

function min(x, y) {
  if (x < y) {
    return x;
  }
  return y;
}

function isEven(number) {
  if (number === 0 || number === 1) {
    if (number === 1) {
      return false;
    }
    return true;
  } else
    if (number < 0) {
      return isEven(number + 2);
    }
  return isEven(number - 2);
}

function countBs(string) {
  var Bs = 0;
  var i;

  for (i = 0; i < string.length; i++) {
    if (string.toUpperCase().charAt(i) === 'B') {
      Bs++;
    }
  }
  return Bs;
}

function countChar(string, letter) {
  var letterCount = 0;
  var i;

  for (i = 0; i < string.length; i++) {
    if (string.toUpperCase().charAt(i) === letter.toUpperCase()) {
      letterCount++;
    }
  }
  return letterCount;
}

console.log(countBs('bBbBbbBBBC'));
// ? 2
console.log(countChar('kakkerlak', 'k'));
// ? 4*/
console.log(min(8, 5));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
