//* In order to make this can run we have to add to our package.json a property "type" with the value of module: "type": "module",
import hello from "./myModule.js"

hello(); //? This is a function and we are calling with import it from the myModule.js file
//! This will return "Hello!"