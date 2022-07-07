console.log("Starting");

let foo = 42;    // foo is now a number
console.log(foo);
foo     = 'bar'; // foo is now a string
console.log(foo);
foo     = true;  // foo is now a boolean
console.log(foo);

console.log(42 / +0);
console.log(42 / -0);

const arr = ['a', 'b', 'c', 'd']
console.log(arr[2] + "Length : " + arr.length) // c
const arr2 = ['store', 1, 'whatever', 2, 'you want', 3, true]
console.log(arr2.toString());

console.log("Objects is a collection of key-value pairs. This data structure is also called map, dictionary or hash-table in other programming languages")
const obj = {
    prop1: "Hello!",
    prop3: function() {console.log("I'm a property dude!")
}}
obj.prop4 = 125
obj["prop5"] = "The new prop on the block"
obj.prop6 = () => console.log("yet another example")


console.log(obj.prop1) // "Hello!"
console.log(obj["prop1"]) // "Hello!"
obj.prop3() // "I'm a property dude!"
console.log(obj.prop4) // 125
console.log(obj["prop5"]) // "The new prop on the block"
obj.prop6() // "yet another example"

Int8ArrayArr =new Int8Array();
Int8ArrayArr = [1,2,3]
console.log(Int8ArrayArr)
console.log("More types of arrays Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array")