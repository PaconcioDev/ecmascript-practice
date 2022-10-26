const numbers = [1, 2, 3, 4, 5, 43, 32, 12];

console.log(numbers.includes(4)); //! true
console.log(numbers.includes(90)); //! false

const names = ["Paco", "Francisco", "Javier"];

console.log(names.includes("Paco")); //! true
console.log(names.includes("paco")); //! false
