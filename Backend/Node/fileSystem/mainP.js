import fs from 'fs/promises'

await fs.writeFile("new1.txt","hello, world!!");

let r = await fs.readFile("new1.txt");
console.log(r.toString());

