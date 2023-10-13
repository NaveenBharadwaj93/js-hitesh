// # Primitive : call by value

// 7 categories

/* String, Number, Boolean, null, Undefined, Symbol, BigInt */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 211111111111111123323n

console.log(typeof bigNumber);

// # Reference type (Non-Primitive)

/* Array, Objects, Functions*/
// Array
const heros = ['Spiderman','Shaktiman','naagraj','doga'];
// objects
let myObj = {
    name:"naveen",
    age:32
}
// Function

const myFunc = function(){
    console.log("hello World!");
}

console.log(typeof myFunc);




