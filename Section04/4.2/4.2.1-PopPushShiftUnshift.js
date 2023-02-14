const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let removeNumberOne = nums.pop();
let removeNumberTwo = nums.pop();
console.log(removeNumberOne);
console.log(removeNumberTwo);
// remove each of the first two items with shift(), saving each item to a variable
const removeNumSix = nums.shift();
const removeNumFive = nums.shift();
console.log(removeNumSix);
console.log(removeNumFive);
console.log(nums);


// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(removeNumberOne, removeNumberTwo);
nums.push(removeNumFive, removeNumSix);
