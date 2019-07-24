'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  for (let value of numbers) {
    if (value % 3 === 0 && value % 5 === 0) {
      sayThree(value);
      sayFive(value);
    }
    else if (value % 3 === 0) {
      sayThree(value);
    } else if (value % 5 === 0) {
      sayFive(value);
    } else {
      `${value} is not divisible by 3 or 5`;
    }
  }
}
function sayThree(number) {
  console.log(`${number} is divisible by 3`);
}
function sayFive(number) {
  console.log(`${number} is divisible by 5`);
}
threeFive(10, 15, sayThree, sayFive);
// expected output 
/*
10 is divisible by 5
12 is divisible by 3
15 is divisible by 3
15 is divisible by 5
*/
// Do not change or remove anything below this line
module.exports = threeFive;
