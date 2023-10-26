// const generateName = require("sillyname")
import generateName from "sillyname";
import superheroes from "superheroes";
const sillyName = generateName()
const superheroName = superheroes.random()

// console.log(`My name is ${sillyName}`);
console.log(`I am ${superheroName}`);
// console.log("Node check");