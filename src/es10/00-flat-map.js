//* flat
const array = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11, 12]]];
console.log(array.flat(3));
//! this will return
/*

[
   1, 2, 3, 4, 5,
   6, 7, 8, 9, 10,
   11, 12
]

*/

//* flatMap
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.flatMap(v => [v, v * 2]));
//! This will return
/* 
[
  1, 2, 2, 4, 3,
  6, 4, 8, 5, 10
]
*/
