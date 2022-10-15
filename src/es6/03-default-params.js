//* ES5
function newUser(name, age, country) {
  var name = name || "No name";
  var age = age || 0;
  var country = country || "No country";
  console.log(name, age, country);
}
newUser(); //! This will return "No name 0 No country"
newUser("Paco", "19", "Colombia"); //! This will return "Paco 19 Colombia"

//*ES6
function newUserEs6(name = "No name es6", age = 0, country = "No country es6") {
  console.log(name, age, country);
}
newUserEs6(); //! This will return "No name es6 0 No country es6"
newUserEs6("Paco IN ES6", 19, "Colombia in es6"); //! This will return "Paco IN ES6 19 Colombia in es6"
