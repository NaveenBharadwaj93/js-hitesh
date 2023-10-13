const name = "Naveen"
const repoCount = 6

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Naveen-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('v'));

// const newString = gameName.substring(0,5) // (0, n-1)
// console.log(newString); // Navee

// const anotherString = gameName.slice(-8,5);
// console.log(anotherString);

const newString = "          Naveen           "
console.log(newString);
console.log(newString.trim()); // works on white spaces and line spaces

const url = "https://naveen.com/naveen%20bharadwaj"
console.log(url.replace('%20','-'));
console.log(url.includes('naveen'));

console.log(gameName.split('-'));// converts string to array using given separator
