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

console.log(sum(range(1, 10)));
console.log(range(1, 10));
// ? 55
console.log(range(5, -2, -1));
// ? [5, 4, 3, 2]
/* Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient? */
 // Your code here.
function reverseArray(arrayIn) {
  var arrayOut = [];
  var i;

  for (i = 0; i < arrayIn.length; i++) {
    arrayOut.unshift(arrayIn[i]);
  }
  return arrayOut;
}
console.log(reverseArray(['A', 'B', 'C']));
// ? ["C", "B", "A"];
function reverseArrayInPlace(array) {
  var len = Math.floor(array.length / 2);
  var i, temp, temp2;

  for (i = 0; i < len; i++) {
    temp = array[i];
    console.log(temp);
    temp2 = array[array.length - 1 - i];
    console.log(temp2);
    array.shift();
    // array.pop();
    // console.log(array);
    array.push(temp);
    // console.log(array);
    // array.unshift(temp2);
    console.log('heh');
  }
  return array;
}

var arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// ? [5, 4, 3, 2, 1] » Display hints...

/* A list

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
 var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
The resulting objects form a chain, like this:

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
 // Your code here.

console.log(arrayToList([10, 20]));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ? 20 » Display hints...
The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

¶To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
 // Your code here.

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true » Display hints...
 ???*/
