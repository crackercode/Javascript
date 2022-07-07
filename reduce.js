console.log("creates a new array by transforming every element in an array individually. filter creates a new array by removing elements that don't belong. reduce, on the other hand, takes all of the elements in an array and reduces them into a single value.")

const numbers = [15.5, 2.3, 1.1, 4.7];
var result = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}

console.log(result);