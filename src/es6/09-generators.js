function* iterate(arr) {
  for (let value of arr) {
    yield value;
  }
}

const it = iterate(["Paco", "David", "Majo", "Jhonny", "Kano"]);
console.log(it.next().value); //! Paco
console.log(it.next().value); //! David
console.log(it.next().value); //! Majo
console.log(it.next().value); //! Jhonny
console.log(it.next().value); //! Kano
console.log(it.next().value); //! undefined
console.log(it.next().value); //! undefined

