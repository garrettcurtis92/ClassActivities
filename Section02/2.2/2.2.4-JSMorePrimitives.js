// create five variables and assign them values
let variable1 = "garrett";
let variable2 = 500;
let variable3 = true;
let variable4
let variable5 = null;
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof variable1, variable2, variable3, variable4, variable5);
// create a variable that references a template literal

// inside the template literal, use two of the above variables
let template = `${variable1} is my name. And my favorite number is ${variable2}`;
// reassign the value of the variable that references "null"
variable5 = 1000;
// print the value and its type
console.log(variable5, typeof variable5);
// print a variable that causes a ReferenceError
let variable6 = "Hello World";
console.log(variable6);
// alter the previous line to no longer cause a ReferenceError
