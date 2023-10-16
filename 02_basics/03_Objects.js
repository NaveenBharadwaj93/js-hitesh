// Singleton ( Created using constructor method)
// Object.create



// object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name : "Naveen", // by default computer thinks label name as "name" (String). But we don't write it as string. We can give any values against label.
    age : 32,
    "full name" : "Naveen Bharadwaj",
    // Use above declared symbol as key
    [mySymbol] : "myKey1",
    email : "Naveen@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "Naveen@hotmail.com"
// console.log(jsUser);

// Object.freeze(jsUser); // by doing this we cannot change any properties of an object. We will not get any error though
// when we try to change the values.

// jsUser.email = "Naveen@yahoo.com"
// console.log(jsUser);

// Add a function inside a object.
// In JS functions are treated as a variable itself. No Speacial treatment

jsUser.greeting = function(){
    console.log(`hello JS user`);
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this["full name"]}`); // To reference same object properties use 'this' call
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
