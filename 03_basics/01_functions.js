// package that can be used as many times as we want

const name = "Naveen"
function sayMyName(){
    console.log(name);
}
// sayMyName()

// function addTwoNumbers(num1,num2){ // num1 , num2 are parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){ // num1 , num2 are parameters
    // let result = num1 + num2
    // return result
    return num1 + num2
}

// addTwoNumbers(3,4) // 3, 4 are arguements

const result = addTwoNumbers(4,6)
//console.log("Result : ", result);

function loginUserMessage(username = "default value"){ // if no arguement is passed then default value will be considered
    if (username === undefined) { // same as if (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Naveen"))

// console.log(loginUserMessage())

// shopping cart example.. we dont know how many arguements are passed.

function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(2,200,500));

// use rest operator when we are not sure about number of arguements. rest and spread operators are same but names are taken 
// based on where it is used
// rest operator combines all the passed arguements and combines inside a package  

// function calculateCartPrice(...num1){
//     return num1 // returns an array
// }
// console.log(calculateCartPrice(2,200,500)); // [ 2, 200, 500 ]


function calculateCartPrice(val1,val2,...num1){
    return num1// returns an array
}

// console.log(calculateCartPrice(2,200,500)); // [ 500 ]

// using objects

const user = {
    username : "Naveen",
    price: 200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// using arrays

const myNewArr = [200,400,600,1000]

function returnSecondValue(anyArray){
    // console.log(`Second value passed is ${anyArray[1]}`);
    return anyArray[1]
}

const returnedValue = returnSecondValue(myNewArr)
console.log(returnedValue);