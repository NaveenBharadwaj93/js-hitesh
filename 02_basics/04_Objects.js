// How to declare object using constructor.. (how to make object a Singleton one)

const tinder = new Object(); // same as tinder = {} but this is non singleton type 

tinder.id = "123abc"
tinder.name = "Navi"
tinder.isLoggedIN = false

// console.log(tinder);

// will try to add object inside a object

const regularUSer = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Naveen",
            lastName : "Bharadwaj"
        }
    }
}

// console.log(regularUSer.fullName);
// console.log(regularUSer.fullName.userFullName);
// console.log(regularUSer.fullName.userFullName.firstName);

const obj1 = {
    1: "a",
    2 : "b"
}
const obj2 = {
    3: "a",
    4 : "b"
}
const obj4 = {
    5: "a",
    6: "b"
}
// Combine above objects inside a single object
// const obj3 = {obj1,obj2} // It will create two individual objects inside single object.. So this is not right

// const obj3 = Object.assign(obj1,obj2) // This will add all the elements of two object under obj3. To confirm this is the operation
// we are performing, it's good practice to add "{}" empty array as a first argument in Object.assign() function. {} becomes target and other 
// parameters becomes source

// const obj3 = Object.assign({},obj1,obj2,obj4 )

const obj3 = {...obj1,...obj2} // Using spread operator also we can execute above objects (used most of the times)
// console.log(obj3);

// Normally we will get below kind of values from data base
const users = [
    {
        id:1,
        email: "n1@gmial.com"
    },
    {
        id:2,
        email: "n2@gmial.com"
    },
    {
        id:3,
        email: "n3@gmial.com"
    },
    {
        id:4,
        email: "n4@gmial.com"
    },
    {
        id:5,
        email: "n5@gmial.com"
    },
]

// console.log(users[1].email); // to access first object from a array fetched from DB.

// Lets study more about tinder user

// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIN'));
