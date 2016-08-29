// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4

function gimme4(){
  return 4;
}

// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments

function multiplyThese(arg1,arg2){
  return arg1*arg2;
}

// 3 - Write a function expression
// that takes one argument and
// console logs that value.

var tellMeWhat = function(oneArg){
  console.log('That value is:', oneArg);
};

// 4 - Write a function declaration
// that takes a number and divides it
// by two.

function halveIt(aNum){
  return aNum/2;
}

// 5 - Call the function from 4 and
// pass it into the function from 2 called with
// the arguments 10, 20. Console log the result.

console.log('The result of the requested calls:',halveIt(multiplyThese(10,20)));
