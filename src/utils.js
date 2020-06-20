import isNumber from "./isNumber";

export const add = (a, b) => {
  if (!isNumber(a) || !isNumber(b))
    throw new Error("Input values must be numbers");
  return a + b;
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

export const getSupportedPhoneCodes = () => {
  // if (!isNumber(a) || !isNumber(b))
  //   throw new Error("input values must be numbers");
  // return a * b;
};

export const divide = (a, b) => {
  if (!isNumber(a) || !isNumber(b))
    throw new Error("input values must be numbers");
  return a / b;
};

export const percentage = (a, b) => {
  if (!isNumber(a) || !isNumber(b))
    throw new Error("input values must be numbers");
  return (a / b) * 100;
};

export const factorial = n => {
  if (!isNumber(n)) throw new Error("input values must be numbers");
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

export const fibonacci = length => {
  var sequence = [0, 1];
  for (var i = 2; i <= length; ++i) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};
