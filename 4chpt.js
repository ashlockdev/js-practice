'use strict';

function range(start, end, step) {
  var rangeArray = [];
  var i, j;
  var stepOne = step;

  if (typeof stepOne === 'undefined') {
    stepOne = 1;
  }
  if (end < start) {
    for (j = start; j >= end; j += stepOne) {
      rangeArray.push(j);
    }
  } else {
    for (i = start; i <= end; i += stepOne) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

function sum(sumArray) {
  var arraySum = 0;
  var i;

  for (i = 0; i < sumArray.length; i++) {
    arraySum += sumArray[i];
  }
  return arraySum;
}

console.log('Sum of range ' + sum(range(1, 10)));
console.log('Range ' + range(1, 10));
// ? 55
console.log('Range ' + range(5, -2, -1));
// ? [5, 4, 3, 2]

function reverseArray(arrayIn) {
  var arrayOut = [];
  var i;

  for (i = 0; i < arrayIn.length; i++) {
    arrayOut.unshift(arrayIn[i]);
  }
  return arrayOut;
}
console.log('Reverse Array ' + reverseArray(['A', 'B', 'C']));
// ? ["C", "B", "A"];

function reverseArrayInPlace(array) {
  var len = Math.floor(array.length / 2);
  var i, temp;

  for (i = 0; i < len; i++) {
    temp = array[i];
    array[i] =  array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

const arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);
console.log('Reverse array in place ' + arrayValue);
// ? [5, 4, 3, 2, 1]

function arrayToList(array) {
  var list = null;
  var i;

  for (i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}
function listToArray(list) {
  var array = [];
  var node;

  for (node = list; node; node = node.rest) {
    array.push(node.value);
    console.log(node.value);
  }
  return array;
}

function prepend(element, list) {
  return {value: element, rest: list};
}
function nth(list, number) {
  if (!list) {
    return typeof list;
  } else if (number === 0) {
    return list.value;
  }
  return nth(list.rest, number - 1);
}
console.log(arrayToList([10, 20, 30]));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ? 20 » Display hints...
/* The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

¶To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".*/
function deepEqual(x, y) {
  console.log('loop');
  if (x === y) {
    return true;
  }
  if (typeof x !== 'object' || x === null || typeof y !== 'object' || y === null) {
    return false;
  }

  let xProperties = 0;
  let yProperties = 0;
  let xprop, yprop;

  for (xprop in x) {
    if (x) {
      xProperties += 1;
    }
  }
  for (yprop in y) {
    if (y) {
      yProperties += 1;
    }
    if (!(yprop in x) || !deepEqual(x[yprop], y[yprop])) {
      return false;
    }
  }

  return xProperties === yProperties;
}
const obj = {here: {is: 'an'}, object: 2};

console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
// ? true » Display hints...
