//* Promise.any return the first promise that "resolve"  
const promise1 = new Promise((resolve, reject) => reject("Rejected"));
const promise2 = new Promise((resolve, reject) => resolve("Resolved"));
const promise3 = new Promise((resolve, reject) => resolve("SECOND Resolved"));

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);
//! Resolved

