// 
let myName = "Naveen     "

// console.log((myName.length));
// // we need a true length of a string. like

// console.log((myName.trueLength));

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.naveen = function(){
    console.log("Naveen is present in all object");
}

Array.prototype.heyNaveen = function(){
    console.log("Naveen says hello");
}

heroPower.naveen()
myHeros.heyNaveen()
// heroPower.heyNaveen()

// inheritance

const user = {
    name : "chai",
    email : "chai@gmail.com"
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User // Teacher can use properties of USer aswell. This is called prototypal inheritance

// modren syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "chaiAurCode             "
String.prototype.trueLength = function () {
    console.log(`${this}`);      
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
myName.trueLength()