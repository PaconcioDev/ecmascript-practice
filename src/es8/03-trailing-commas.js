const myNumArr = [24, 34, 22, 14, 16, 18];

console.log(myNumArr); //! [ 24, 34, 22, 14, 16, 18 ]
console.log(myNumArr.length); //! 6

//* The use of trailing commas on an array

const myTrailingCommasArr = [24, 34, 22, 14, 16, 18, , , , 45];

console.log(myTrailingCommasArr); //! [ 24, 34, 22, 14, 16, 18, <3 empty items>, 45 ]
console.log(myTrailingCommasArr.length); //! 10 