let a=[4,3,6,1,7,9,5,2];

console.log(a);
// console.log(a.length);
// console.log(a.toString());
// console.log(a.join("-"));
// console.log(a.pop()); // to remove the last element
// console.log(a.shift()); // to remove the 1st element
// console.log(a.push(8)); // returns the updated length and add the element at last
// console.log(a.unshift(2)); // returns the updated length and add the element at 1st
// console.log(delete a[3]); // returns the updated length and add the element at 1st
// console.log(a.concat([1,2,3,4])); // returns the updated array but it not change the original array 
// console.log(a.sort()); // returns the updated array also change the original array 
// console.log(a.splice(1,3)); // returns deleted element, it updates the array with deleted alement from index 1 upto the 3 element
// console.log(a.splice(1,3,1,2,3,4,5)); // returns deleted element, it updates the array with adding the element from 1 to 5 from the index 1
// console.log(a.slice(4)); // returns the sliced array from the index 4, it does not update the original array
// console.log(a.reverse()); // returns and modifies the reversed array

// console.log(a.map((e,i)=>{
//     return e*e;
// }));
// a.map((e,i)=>{
//     a[i]=e*e;
// });

// console.log(a.filter((e)=>{
//     return e>=5;
// }));

// console.log(a.reduce((a,b)=>{
//     return a+b;
// }));

// console.log(Array.from("sushanth"));

console.log(
    Array.from(Array(3).keys()) // returns the array from 0 to 2
); 

console.log(a);


// a.forEach((e,i) => {
//     console.log(e,i);
// });