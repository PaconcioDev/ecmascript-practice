const myFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("It was resolved :D!!");
    } else {
      reject("It was rejected >:(");
    }
  });
};

myFunction()
  .then((response) => console.log(response)) //? If the condition is true
  .catch((err) => console.log(err)); //? If the condition is false

//! This will return "It was resolved :D!!" in the case that te condition that we are evaluating is true, and it will return It was rejected >:( if the condition is false
