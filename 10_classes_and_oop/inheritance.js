class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email,
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@email.com","123")

chai.addCourse()
chai.logMe()

const masalaChai = new user("masalaChai")

masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(masalaChai instanceof user);
