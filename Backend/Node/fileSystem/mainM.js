import fs from "node:fs"

let b=fs.readFile('new.txt',(err,data)=>{
    console.log(data.toString());
})