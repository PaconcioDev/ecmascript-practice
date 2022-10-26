//* # at the start
class GettersAndSetters {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  #speak() { //! Now with # at the start this method is private so it can obly be accessed inside his own class
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const gsInstance = new GettersAndSetters("Paquito", 18);
console.log(gsInstance.uAge);
console.log(gsInstance.uAge = 223);
