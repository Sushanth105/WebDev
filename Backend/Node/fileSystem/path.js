import path from 'path'

let mypath = '/home/sushanth/Coding/WebDev/Backend/Node/fileSystem/new.txt'
console.log(path.isAbsolute(mypath));
console.log(path.delimiter);
console.log(path.join('home:/','base/hi.txt'));