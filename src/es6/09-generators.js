const myArray = ["Paco", "David", "Majo", "Jhonny", "Kano"];

//* To identify our generators de function keyword has to have "*" like in the example
function* iterate(arr) {
  for (let value of arr) {
    yield value; //? The keyword yield is used to return each of our values
  }
}

const it = iterate(myArray);
console.log(it.next().value); //! Paco
console.log(it.next().value); //! David
console.log(it.next().value); //! Majo
console.log(it.next().value); //! Jhonny
console.log(it.next().value); //! Kano
console.log(it.next().value); //! undefined
console.log(it.next().value); //! undefined

//! The next() method returns an object with value and done properties, value represents the displayed value, and done indicates whether or not the iterator looped through all of its values.