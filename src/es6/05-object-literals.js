//* Enhanced object literals

function newUser(user, age, country, uId) {
  return {
    user, //? You don't have to put a value like in id property if the name is the same as the parameter name
    age,
    country,
    id: uId,
  };
}

console.log(newUser("Paconcio", 18, "CO", 111));
//! This will return { user: 'Paconcio', age: 18, country: 'CO', id: 111 }
