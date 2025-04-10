const fs = require('fs');

console.log("starting");

// fs.writeFile("new.txt","hi, how are you?",()=>{
//     console.log("Done");
//     fs.readFile("new.txt",(err,data)=>{
//         console.log(err,data.toString())
//     })
// })

fs.appendFile("new.txt" ,"\nI am fine.",()=>{
    fs.readFile("new.txt",(err,data)=>{
        console.log(err,data.toString())
    })
})

console.log("ending");