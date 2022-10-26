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
  .catch((err) => console.log(err)) //? If the condition is false
  .finally(() => console.log("Finally everything ended"));
