const sum = function (arr) {
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const reverse = function (arr) {
  return arr.reverse();
};

const main = function () {
  const numbers = process.argv.slice(2).map((x) => +x);
  console.log("Sum: ", sum(numbers));
  console.log("Multiply: ", multiply(numbers));
  console.log("Reverse: ", reverse(numbers));
};

main();
