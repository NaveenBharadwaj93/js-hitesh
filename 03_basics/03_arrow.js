const user = {
    username : "naveen",
    price : 999,

    welcomeMesssage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMesssage()
// user.username = "Shiva"
// user.welcomeMesssage()

// console.log(this)

// function chai() {
//     let username = "naveen"
//     console.log(this.username);
// }

// chai() // this keyword will work only inside a object, not inside a function.

// const chai = function () {
//      let username = "naveen"
//      console.log(this.username);
// }

// chai()

// const chai = () => {
//       let username = "naveen"
//       console.log(this);    // generates empty object
// }

const eAddTwo = (num1,num2) => { // explicit return kind arrow function
    return num1 + num2
}

console.log(eAddTwo(3,4));

const iAddTwo = (num1,num2) => num1 + num2  // implicit return kind arrow function. No need of {} and return statement. We can use () in place of {} like below function

const iAddThree = (num1,num2,num3) => (num1 + num2 + num3)

console.log(iAddTwo(2,3))

console.log(iAddThree(2,3,4));