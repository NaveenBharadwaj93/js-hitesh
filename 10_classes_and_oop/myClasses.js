// ES6

// class User {
//     constructor(username,email,password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     usernameUpperCase(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Chai","chai@gmail.com","chaipassword123")
// console.log(chai.encryptPassword());
// console.log(chai.usernameUpperCase());


// behind the scene

function User(username,email,password) {
    this.username = username,
    this.email = email,
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.usernameUpperCase = function () {
    return`${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@tea.com","123")
console.log(tea.encryptPassword());
console.log(tea.usernameUpperCase());
