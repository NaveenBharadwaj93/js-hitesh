// if
const isUserLoggedIn = true
const temparature = 41

// if (isUserLoggedIn) {
    
// }

// if (temparature === 41) {
//     console.log("Temparature is less than 50");
// } else {
//     console.log("Temparature is more than 50");
// }

// Contitional operators
// <, >, <=, >=, ==, !=, === (checks type as well), !==, 

// const score = 200

// if (score > 100) {
//     const power = "fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); out of scope. reference error: power is not defined.

// short hand notation for if

//  const balance = 1000

// if (balance > 500) console.log("test"); // implicit scope

// if (balance > 500) console.log("test"), console.log("test1"); // Is valid but not recon

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 500");
// } else if(balance < 900){
//     console.log("less than 500");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromMail = true

if (userLoggedIn && debitcard) {
    console.log("allowed to buy courses");
}
if (loggedInFromGoogle || loggedInFromMail) {
    console.log("User logged in");
}

// Logical operators
// && (And), || (Or)