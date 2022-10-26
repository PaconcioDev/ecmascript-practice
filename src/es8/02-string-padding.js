const string = "Hello i'm a string";

console.log(string.padStart(7, "Hi")); //! Hello i'm a string
console.log(string.padStart(20, "Hi")); //! HiHello i'm a string
console.log(string.padStart(25, "Hi")); //! HiHiHiHHello i'm a string

console.log(string.padEnd(7, "Hi")); //! Hello i'm a string
console.log(string.padEnd(20, "Hi")); //! Hello i'm a stringHi
console.log(string.padEnd(25, "Hi")); //! Hello i'm a stringHiHiHiH

//*--------------------------------------------------------------------------------------------------------------------------------------------------------------

const string2 = "Hello";

console.log(string2.padStart(5, "_")); //! "Hello", it return only "Hello" because the length of the string is already 5
console.log(string2.padStart(6, "_")); //! "_Hello" it will return just one _ with the Hello, because its "unshifting" the value that we put on the method
console.log(string2.padStart(10, "_")); //! "_____Hello" theres five "_" in order to make the string lenght 10

console.log(string2.padEnd(5, "_")); //! "Hello", it return only "Hello" because the length of the string is already 5
console.log(string2.padEnd(6, "_")); //! "Hello_" it will return just one _ with the Hello, because its "pushing" the value that we put on the method
console.log(string2.padEnd(10, "_")); //! "Hello_____" theres five "_" in order to make the string lenght 10
