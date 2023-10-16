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

console.log(loginUserMessage())
