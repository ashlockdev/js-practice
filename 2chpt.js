'use strict';

function triangleLoop() {
  var octothorpe =  '';
  var i;

  for (i = 1; i <= 7; i++) {
    octothorpe += '#';
    console.log(octothorpe);
  }
}

function fizzBuzz() {
  var i;

  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

function chessBoard(column, line) {
  var board = '';
  var i, j;

  for (j = 0; j < column; j++) {
    for (i = 0; i < line; i++) {
      if ((i + j) % 2 === 0) {
        board += '@';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }
  console.log(board);
}

triangleLoop();
fizzBuzz();
chessBoard(5, 5);
