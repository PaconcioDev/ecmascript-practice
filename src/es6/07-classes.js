//* Declaration
class User {}

//* New instance of the class
//? const userOne = new User();

class ExampleClass {
  //* Methods
  greeting() {
    return "Hello Sir";
  }
}

const newExample = new ExampleClass();
console.log(newExample.greeting()); //! This will return Hello Sir

const anotherInstance = new ExampleClass();
console.log(anotherInstance.greeting()); //! This will return Hello Sir

//* Classes with constructors
class ClassWithConstructor {
  constructor() {
    console.log("New user");
  }
  greeting() {
    return "Hello Sir";
  }
}

const newInstanceOfCwc = new ClassWithConstructor(); //? "Cwc" is a reference to ClassWithConstructor
//! When we run our code there's calling the constructor that initialize the elements that are assigned with "new ClassWithConstructor();"

//* this
class ExampleOfThis {
  constructor(name) {
    //? In this case the constructor recieve parameters that we assing inside of the block
    this.name = name;
  }
  //* Methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const paquito = new ExampleOfThis("Paquito Lindo");
console.log(paquito.greeting());
//! This will return "Hello Paquito Lindo"

//* getters & setters
class GettersAndSetters {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const gsInstance = new GettersAndSetters("Paquito", 18);
console.log(gsInstance.uAge); //! This will return 18
console.log((gsInstance.uAge = 29)); //! This will return 29
