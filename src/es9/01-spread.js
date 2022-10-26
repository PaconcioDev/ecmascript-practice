const user = { username: "Paco", age: 18, country: "CO" };

const { username, ...values } = user;
console.log(username) //! Paco
console.log(values) //! { age: 18, country: 'CO' }