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
