async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
  yield await Promise.resolve(4);
}

const other = asyncGenerator();

other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));

console.log("Hello!");
//! all of this will return
/* 
Hello!
1
2
3
4
*/

const arrOfNames = ["Paco", "Ama", "George", "Francis"];

async function namesArr(arr) {
  for await (let value of arr) {
    console.log(value);
  }
}

const names = namesArr(arrOfNames);
console.log("After");
//! All of this will return
/* 
After
Paco
Ama
George
Francis
*/
