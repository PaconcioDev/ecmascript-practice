const users = {
  paco: {
    country: "CO",
  },
  ama: {
    country: "MX",
  },
  george: {
    country: "CO",
  },
};

console.log(users.paco.country); //! CO
console.log(users.paco.age); //! undefined

//console.log(users.majo.country); //! TypeError: Cannot read property 'country' of undefined
console.log(users?.majo?.country); //! undefined
