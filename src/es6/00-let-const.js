//** Reassing a variable

var lastName = "Javier";
lastName = "Pepito";
console.log(lastName);

let fruit = "Watermelon";
fruit = "Apple";
console.log(fruit);

//! You can't reassing a const
const animal = "Dog";
animal = "Cat";
console.log(animal);


//* Scope
const fruits = () => {
  if (true) {
    var fruit1 = "Melon"; //! Function scope
    let fruit2 = "Kiwi"; //! Block scope
    const fruit3 = "Banana"; //! Block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};
fruits();
