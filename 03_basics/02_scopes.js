// let a = 100
// const b = 200
// var c = 300

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("Inner ",a,b);


// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Naveen"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // /two()
}

// one()

if (true) {
    const username = "naveen "
    if (username === "naveen ") {
        const website = "youtube"
        //  console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

/* ========================== Interesting ================================= */
add1(5)
function add1(num) {
    return num + 1
}
add1(5)

// addTwo() - gives error trying to access variable before initialization. 
// This refers to hoisting. Hoisting defines where in the program function should be called.

const addTwo = function (num) {
    return num + 2
}
addTwo()
console.log(add1(5))
console.log(addTwo(2))