console.log("Variable, DataType and objects");

// var is globally declaired
var a=5;
var b=6;
var c="sushanth"

console.log(a+b, c);

console.log(typeof a , typeof b, typeof c);

// const d=6;
// d = d+1; //this is not allowed

// let is used to create block variable

let e=10;
let f=15;
{
    e++;
    let f=20;
    console.log(e);
    console.log(f);
}
console.log(e);
console.log(f);

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q =undefined;
let r = null;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    name : 'hiii',
    id : 123,
}
console.log(o)

o.salary = 2000;
console.log(o)

o.salary = 5000;
console.log(o)