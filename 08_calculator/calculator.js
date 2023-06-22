const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let count = 0;

	for(var i = 0; i < arr.length; i++){
    count += arr[i];
  }

  return count;
};

const multiply = function(...args) {
  let counter = 1;
  for(let arg of args){
    counter *= arg;
  }

  return counter;
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(a) {

  let counter = 1;

  if (a === 1 || a === 0){
    return 1;
  }
	
  for (var i = a; i > 1; i--){
    counter *= i;
  }
  return counter;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
