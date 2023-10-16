// const amazonUser = new Object();


// Learn destructuring of objects.

const course = {
    name : "Js in kannada",
    cost : 999,
    insructor : "Naveen"
}


// this is called destructuring
const {insructor} = course // good way to get value of a object using key. same as accessing course.insructor

console.log(insructor);

// Arrays can also be destructured

// lets work on api's

// json example

// {
//     "name": "naveen",
//     "courseName" : "Js in kannada",
//     "price" : "free"
// }

// array example

// [
//     {},
//     {},
//     {}
// ]

// how to fetch data from api response in js 

