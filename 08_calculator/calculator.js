const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y 
};

const sum = function(arr) {
  let sum = 0
  arr.forEach(element => {
    sum += element
  });
  return sum
};

const multiply = function(arr) {
  if (arr.length) {
    return arr.reduce((previousValue, currentValue) => previousValue * currentValue)
  } else {
    return 0
  }
};

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};

const factorial = function(num) {
	if (num === 0) {
    return 1
  } else {
    let product = 1
    for (let i = 1; i <= num; i++) {
      product *= i
    }
    return product
  }
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
