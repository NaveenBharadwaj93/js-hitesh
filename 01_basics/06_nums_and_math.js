const  score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);
let balanceString = balance.toString()
let fixedBbalance = balance.toFixed(2)
// console.log(fixedBbalance);

const otherNumber = 23.4446
// console.log(otherNumber.toPrecision(3));

const anotherNumber = 1000000
// console.log(anotherNumber.toLocaleString('en-IN'));


/* ******************************** Maths ***************************** */

// console.log(Math.PI);
// console.log(Math.abs(-5967));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,9,0.5,1));

// console.log(Math.random()); // Generates values between o to 1
// console.log(Math.round(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min ))
