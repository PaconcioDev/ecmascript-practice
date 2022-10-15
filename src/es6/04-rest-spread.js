//* Array destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;

console.log(a, b);
console.log(a, fruits[1]);
//! Both console logs will return "Apple Banana"

//* Object destructuring
let user = { userName: "Paco", age: 19 };
console.log(user.userName, user.age);

let { userName, age } = user;
console.log(userName, age);

//! Both console logs will return "Paco 19" but the second one is using object destructuring so we can use the property names instead "Object.property"

//* Spread operatos allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
let person = { name: "Paco", age: 19 };
let country = "Colombia";

let data = { ...person, country };
console.log(data); //! This will return { name: 'Paco', age: 19, country: 'Colombia' }

let modifiedData = { pet: "Cat", ...person, country };
console.log(modifiedData); //! This will return { pet: 'Cat', name: 'Paco', age: 19, country: 'Colombia' }

//* Rest allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
};

sum(1, 1, 2, 3); 
//! This will return [ 1, 2, 3 ] 
//! 2