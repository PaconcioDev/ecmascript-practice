const regex = /\b(Apple)+\b/g;

const fruits = "Lorem ipsum Apple, bannana, Apple orange, etc, etc, etc";

for (const match of fruits.matchAll(regex)) {
  console.log(match);
}

/* 

[
  'Apple',
  'Apple',
  index: 12,
  input: 'Lorem ipsum Apple, bannana, Apple orange, etc, etc, etc',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 28,
  input: 'Lorem ipsum Apple, bannana, Apple orange, etc, etc, etc',
  groups: undefined
]

*/
