//* This is used when you want to transform an array that's inside of another array into an object
const entries = new Map([
  ["name", "Paco"],
  ["age", 18],
]);
console.log(entries); //! Map(2) { 'name' => 'Paco', 'age' => 18 }
console.log(Object.fromEntries(entries)); //! { name: 'Paco', age: 18 }

const object = [
  ["name", "My Object"],
  ["age", "since i created it"],
];
console.log(Object.fromEntries(object)); //! { name: 'My Object', age: 'since i created it' }
