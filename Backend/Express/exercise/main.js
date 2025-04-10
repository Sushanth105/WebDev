// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

const fs = require('fs')
const path = require('path')

let file = fs.readdirSync(__dirname);

for (const ele of file) {
    if(path.extname(ele).slice(1) != 'js' && path.extname(ele).slice(1) != 'json'){
        if(fs.readdirSync(__dirname).includes(path.extname(ele).slice(1))){
            fs.renameSync(path.join(__dirname , ele) , path.join(__dirname , path.extname(ele).slice(1) , ele));
        }
        else{
            fs.mkdirSync(path.extname(ele).slice(1))
            fs.renameSync(path.join(__dirname , ele) , path.join(__dirname , path.extname(ele).slice(1) , ele))
        }
    }
}