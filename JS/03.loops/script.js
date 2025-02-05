let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}

// console.log(obj.a);
// console.log(obj["a"]); // here we have to give the key as string to get the output

// forIn loop
for (const key in obj) {
    // console.log(obj.key); // this will not work because in this case the key is string
    console.log(key, obj[key]);
}
for (const value of "Sushanth") {
    console.log(value);
}