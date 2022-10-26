const dataRegex = /(\d{4})-(\d{2})-(\d{2})/;
const matches = dataRegex.exec("2022-23-10");

console.table(matches);

/* 
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2022-23-10' │
│    1    │    '2022'    │
│    2    │     '23'     │
│    3    │     '10'     │
│  index  │      0       │
│  input  │ '2022-23-10' │
│ groups  │  undefined   │
└─────────┴──────────────┘

*/