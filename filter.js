console.log("creates a new array by transforming every element in an array individually. filter creates a new array by removing elements that don't belong. reduce, on the other hand, takes all of the elements in an array and reduces them into a single value.")

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

console.log(result);
function checkAdult(age) {
  return age >= 18;
}
