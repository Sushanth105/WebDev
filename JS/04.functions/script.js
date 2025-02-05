function add(a,b){
    console.log(a+b);
}

const adding = add;
adding(1,2);

const sub = (x,y)=>{
    console.log(x-y);
}

sub(3,2);
let a=4;
let b=3;
let c='-';
console.log(eval("10-2"));
console.log(eval(`${a} ${c} ${b}`))
console.log(eval(a+c+b))
console.log(eval(""+a+""+c+""+b))