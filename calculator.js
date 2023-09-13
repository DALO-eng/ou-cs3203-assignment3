// Sum an array of numbers
const sum = function (arr) {
  return arr.reduce((a, b) => a + b, 0);
};

// Multiply an array of numbers
const multiply = function (arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const reverse = function (arr) {
  return arr.reverse();
};

// Main function
const main = function () {
  // Get the numbers from the command line
  const numbers = process.argv.slice(2).map((x) => +x);
  console.log("Sum: ", sum(numbers));
  console.log("Multiply: ", multiply(numbers));
  console.log("Reverse: ", reverse(numbers));
};

main();
