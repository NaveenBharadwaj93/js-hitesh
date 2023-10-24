class user{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

    get password(){// for getters and setters, properties will be maniputaled as a function only.
        return this._password.toUpperCase()
    }
    
    set password(value){// for getters and setters, properties will be maniputaled as a function only.
       this._password = value.toUpperCase() // error : Maximum call stack size exceeded by using password. use _password.
    }
        
    } 

const naveen = new user("Naveen@gmail.com","abc")
console.log(naveen.password);