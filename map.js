console.log("creates a new array by transforming every element in an array individually. filter creates a new array by removing elements that don't belong. reduce, on the other hand, takes all of the elements in an array and reduces them into a single value.")

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(numbers);
console.log(newArr);