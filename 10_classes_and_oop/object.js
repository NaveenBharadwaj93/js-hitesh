function multiplyByFive(num){
    return num*5;
}

multiplyByFive.power = 2

console.log(multiplyByFive.power); // function is a function as well as object too. so can use object properties
console.log(multiplyByFive(5));
console.log(multiplyByFive.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ // this matlab jis :D jis ne bbhi bulaya he unka score badhado
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}



// const chai = createUser("chai",25) // now to access printMe/increment function we need to let chai(in this case) know
                                   // that these functions are available. "new" keyword does this job.
const chai = new createUser("chai",25)
const tea = createUser("tea",250)

chai.increment()
chai.printMe()