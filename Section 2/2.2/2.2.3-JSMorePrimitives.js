const { type } = require("os");

// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "night";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `"Good ${timeOfDay}!"`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let str1
// Print the new variable and its type
console.log(str1, typeof str1);
// What type should we expect?
undefined
// Assign the variable a value that indicates the variable is purposely blank
str1 = null;
// What value should we assign?
//null
// Print the variable and its type again
console.log(str1, typeof str1);
// What type should we expect?
//null
// Try to print a variable that does not exist
console.log(notVariable);
// What should we expect to print in the CLI?
//reference error
// Print "greeting" again
console.log(greeting);
// Will this line run?
//No it will not run,  due to reference error.

