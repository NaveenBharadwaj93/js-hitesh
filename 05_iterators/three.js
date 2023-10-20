// for of

// array specific loops

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello WOrld!"

// for (const greet of greetings) {
//     if (greet == ' ') {
//         continue
//     }
//     console.log(`Each char is ${greet}` );
// }

// Maps

// const map = new Map() // values are unique and it remembers the order of insertion
// map.set('IN','India')
// map.set('USA','United States of America!')
// map.set('Fr','France')

// // console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':-', value);
// }

// const myObj = { 
//     'game1' : 'nfs',
//     'game2' : 'spiderman'
// }

// for (const [key,value] of myObj) { // Obejects are not iterable so for of loop  does not work. we should use for in loop
//     console.log(key, ':-', value);
// }