const number = 1;
const validate = number ?? 5;

console.log(validate); //! 1

const nullExample = null;
const validateNull = nullExample ?? 5;

console.log(validateNull); //! 5
