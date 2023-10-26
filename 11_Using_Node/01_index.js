// const generateName = require("sillyname")
// import generateName from "sillyname";
// import superheroes from "superheroes";
// import InputPrompt from "inquirer/lib/prompts/input"
import fs from 'fs'
import input from "@inquirer/input"
import qr from "qr-image"

// const sillyName = generateName()
// const superheroName = superheroes.random()
const answer = await input({message:'Enter the name'})
fs.writeFile('userInput.txt',answer,(err)=>{
    if (err) throw err;
})
let qr_png = qr.image(answer,{type:"png"})
qr_png.pipe(fs.createWriteStream('nameQr.png'))

console.log(answer);

// console.log(`My name is ${sillyName}`);
// console.log(`I am ${superheroName}`);
// console.log("Node check");