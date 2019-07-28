'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  for (const value of numbers) {
    if (value % 3 === 0 && value % 5 === 0) {
      threeCallback(value);
      fiveCallback(value);
    } else if (value % 3 === 0) {
      threeCallback(value);
    } else if (value % 5 === 0) {
      fiveCallback(value);
    } else {
      console.log(`${value} is not divisible by 3 or 5`);
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
// Do not change or remove anything below this line
module.exports = threeFive;
