const fs = require("fs");

// fs.writeFile("message.txt",'Hello from Node Js',(err) => {
//     if(err){
//         throw err
//     }
//     console.log("The file has been saved.");
// })

// fs.writeFile('message.txt',`Data added`,(error)=>{
//     if (error) throw error
//     console.log("data added");
// })

fs.readFile('./message.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})

