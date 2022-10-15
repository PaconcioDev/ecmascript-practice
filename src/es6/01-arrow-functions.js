//* ES5
function exampleFunction(num) {
  return num * num;
}

//* ES6
const arrowFunction = (num) => {
  return num * num;
};

//* This syntaxis is used when you want to return immediatly, so you don't need to use () for the parameters if theres only one, or {} for the body of the function

const exampleArrowFunction = num => num * num;
console.log(exampleArrowFunction(2)); //! This show the number 4 in the console

const example2 = (num1, num2) => num1 * num2;
console.log(example2(2, 3)); //! This show the number 6 in the console
