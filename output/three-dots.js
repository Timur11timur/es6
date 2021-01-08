"use strict";

function sum() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (prev, current) {
    return prev + current;
  });
}

alert(sum(1, 2, 3));
var nums = [1, 2];

function sumTwo(x, y) {
  return x + y;
}

alert(sumTwo.apply(void 0, nums));