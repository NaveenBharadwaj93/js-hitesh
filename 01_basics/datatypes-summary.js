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

// console.log(id === anotherId);

const bigNumber = 211111111111111123323n

// console.log(typeof bigNumber);

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

// console.log(typeof myFunc);

/* Memories */


//Stack (Primitive data types uses this memory) --> returns actual value on call, 

let myYoutubeName = "nbTechMantra"
let anotherName = myYoutubeName
anotherName = "NaveenYoutube"

// console.log(myYoutubeName);
// console.log(anotherName);


//Heap (Non -primitive data types uses this) --> returns memory reference of original value on call

let user1 = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

console.log(user1.email);

let user2 = user1
user2.email = "hello@gmial.com" /* user1 email also gets changed because user2 is refering to
 same memory space */

console.log(user2.email);
console.log(user1.email);