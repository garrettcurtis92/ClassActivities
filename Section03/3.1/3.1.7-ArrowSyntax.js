// refactor the functions below into arrow syntax
const myNumberFunction = () => {
  return ((2 ** 2 + 3) % 4) * 14;
}
const myNumberFunction = () =>{

  return ((2 ** 2 + 3) % 4) * 14;
}


const greet(name) => {
  return `Hello, ${name}`;
}

const greet = (name) => `Hello, ${name}`;
console.log(greet);



const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};

function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}


const tripleAndHalf = (num) =>{
  let triple = num * 3;
  console.log(`The sum of your number is ${sum}`);
  return sum;
}




const sumTwoNumbers (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
