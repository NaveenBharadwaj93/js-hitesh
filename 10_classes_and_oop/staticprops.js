class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){ // static method functionality will not be available for the instances created out of this class
                      //  or to any child class.
        return `123`
    }
}

const naveen = new User("Naveen")
// console.log(naveen.createId());


class Teacher extends User{
    constructor(username,email){
        super(username),
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone);
console.log(iphone.createId());