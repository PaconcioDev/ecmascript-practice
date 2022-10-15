let string1 = "Hello";
let string2 = "World";

//* ES5
let phrase = string1 + " " + string2 + "!";
console.log(phrase); //! This will return "Hello World!"

//? Multi-Line strings
let lorem = 'This is a string \n ' + 'this is another line'
console.log(lorem) 
//! This will return: This is a string
//!  this is another line 

//*ES6
//! Template Literals
let phrase2 = `${string1} (version 2) ${string2}!!!!!`;
console.log(phrase2); //! This will return "Hello (version 2) World!!!!!"

let lorem2 = `This is a string 
this is another line
And another 'cause it's easy with template literals`
console.log(lorem2)
//! This will return: This is a string
//! this is another line 
//! And another 'cause it's easy with template literals
