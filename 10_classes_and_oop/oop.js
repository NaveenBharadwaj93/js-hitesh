// Object literal have collections, properties and methods
// object literal means literally a object...


const user = {
    username : "Naveen",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from db");
        // console.log(`username : ${this.username}`);
        console.log(this);
    }

}

// console.log(user["username"]);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
const date = new Date() // new keyword creates a new context... This is called cunstructor function.

function User (username,loginCount,isLoggedIn)  {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User("naveen",10,'yes')
// const userTwo = User("Chai aur code",12,true)
const userOne = new User("naveen",10,'yes')
const userTwo = new User("Chai aur code",12,true)
console.log(userOne instanceof User);
console.log(userTwo);

// New keyword
// 1. Creates a new object
// 2. Constructor function is called
// 3. this keyword is ijected inside
// 4. injected values are available for the function