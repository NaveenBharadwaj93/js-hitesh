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

// problem come when we want to return a object.
// lets try to return object from explicit return arrow function.
// const returnObject = () => {name:"Naveen"} // this will generate undefined on call 
// const returnObject1 = () => {return name:"Naveen"} // cannot be done like this also

//So the way to return an object is using implicit return arrow function

const returnObject = () => ({name:"Naveen"})

console.log(returnObject());

// implicit return kind arrow function. No need of {} and return statement. 
// We can use () in place of {} like below function.
// () creates a block and we can use it to write any business logic.

const iAddTwo = (num1,num2) => num1 + num2  

const iAddThree = (num1,num2,num3) => (num1 + num2 + num3)

console.log(iAddTwo(2,3))

console.log(iAddThree(2,3,4));