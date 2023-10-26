const fs = require("fs");

// fs.writeFile("message.txt",'Hello from Node Js',(err) => {
//     if(err){
//         throw err
//     }
//     console.log("The file has been saved.");
// })
let readData;
fs.readFile('message.txt','utf-8',(err,data)=>{
    if (err) throw err;
    readData = data;
})
console.log(readData);