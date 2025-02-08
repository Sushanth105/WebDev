function factorial(n){
    return (n==0)? 1 : Array.from(Array(n+1).keys()).slice(1).reduce((a,b)=>a*b);
}

console.log(factorial(0))