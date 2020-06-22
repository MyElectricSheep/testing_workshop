import isNumber from "./isNumber";

export const add = (a, b) => {
  if (!isNumber(a) || !isNumber(b))
    throw new Error("Input values must be numbers");
  return a + b;
};

export const subtract = (a, b) => {
  if (!isNumber(a) || !isNumber(b))
  throw new Error("Input values must be numbers");
  return a - b;
};

export const multiply = (a, b) => {
  if (!isNumber(a) || !isNumber(b))
  throw new Error("Input values must be numbers");
  return a * b;
};

export const divide = (a, b) => {
  if (!isNumber(a) || !isNumber(b))
  throw new Error("Input values must be numbers");
  return a / b;
};

export const percentage = (a, b) => {
  if (!isNumber(a) || !isNumber(b))
  throw new Error("Input values must be numbers");
  return (a * b) / 100;
};

export const sum = someArray => {
  if (
    !Array.isArray(someArray) ||
    !someArray.length ||
    !someArray.every(el => isNumber(el))
  )
    throw new Error("Input must be an array containing only numbers");
  return someArray.reduce((acc, curr) => acc + curr, 0);
};


export const promiseAllTheWay = (condition) => {
  return new Promise((resolve, reject) => {
    if (condition) return resolve(42)
    else reject({error: "Something wrong happened"})
  })
}

export const factorial = n => {
  // In mathematics, the factorial of a positive integer n, denoted by n!, 
  // is the product of all positive integers less than or equal to n:
  if (!isNumber(n)) throw new Error("input value must be a number");
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

export const fibonacci = length => {
  if (!isNumber(length)) throw new Error("Length must be a number");
  var sequence = [0, 1];
  for (var i = 2; i <= length; ++i) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};
