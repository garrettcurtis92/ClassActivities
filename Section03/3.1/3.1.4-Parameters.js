// Named Parameters
// write a function that takes two named parameters:
function myFunction(param1, param2 = 5){
  console.log(param1, param2);
  return param1 + param2;
}

myFunction(1, 6)
myFunction(1, 3, 6);
//myFunction(5);
myFunction(1);
// print each named parameter,

// then return the parameters added together

// invoke the function and pass in two numbers

// invoke the function and pass in more than two numbers

// invoke the function and pass in only one number

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
function myFunction(param1, param2, ...param3){
  console.log(param1, param2);
  console.log(param3);
  return param1 + param2;
}
myFunction(1, 2, 3, 4, 5);
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
