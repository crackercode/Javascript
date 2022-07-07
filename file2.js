console.log("var is function scoped and let is block scoped");

console.log("We can declare a variable again even if it has been defined previously in the code. We cannot declare a variable more than once if we defined that previously")
console.log("Hoisting is allowed with var. Hoisting does not work with let.");

console.log(x);
var x=5;
console.log(x);

console.log(y);
let y=5;
console.log(y);