const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("RESOLVED!!"), 5000)
      : reject(new Error("THIS IS AN ERROR!!"));
  });
};

//* async function
const exampleFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hello World");
};

console.log("Before");
exampleFn();
console.log("After");

//! All of this will return
/* 
Before
After
RESOLVED!! (After 5 seconds)
Hello World (After the resolve)
*/
