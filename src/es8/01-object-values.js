//* With Object.values we only obtain the VALUES of the object in an array
const countries = {
  MX: "Mexico",
  CO: "Colombia",
  CL: "Chile",
  PE: "Peru",
};

console.log(Object.values(countries)); //! [ 'Mexico', 'Colombia', 'Chile', 'Peru' ]

