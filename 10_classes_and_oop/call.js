function SetUserName (username){
    //Complex DB calls
    this.username = username
    console.log("Called");
}

function createUser(username,email,password) {
     SetUserName(username) // when function call is made inside a function, we need to explicitly provide 
                          //  call ".call()"to the function to hold the reference of a function.
                          //  in this case reference of a function will go out of call stack and all the variables as well.
                          // Looks deceiving but its the behaviour
    SetUserName.call(this,username) // this is passed here to pass current execution context to the 
                                    // called function. 

    this.email = email;
    this.password = password;
}

const chai = new createUser("Chai","Chai@adp.com","123")
console.log(chai);