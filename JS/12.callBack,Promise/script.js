
// function orderPizza(callback) {
//     console.log("Pizza is being prepared...");
//     setTimeout(() => {
//         console.log("Pizza is ready!");
//         callback(); // Calling the callback function
//     }, 3000); // Simulating time delay
// }

// function eatPizza() {
//     console.log("Eating the pizza!");
// }

// orderPizza(eatPizza);


// function orderPizza() {
//     return new Promise((resolve, reject) => {
//         console.log("Pizza is being prepared...");
//         let success = false // Change this to false to simulate failure
//         setTimeout(() => {
//             if (success) {
//                 console.log("Pizza is ready!");
//                 resolve("Enjoy your pizza!");
//             }
//             else{
//                 reject("Sorry, we ran out of ingredients!");
//             }
//         }, 3000)
//     })
// }

// orderPizza().then((message)=>{
//     console.log(message);
// }).catch((message)=>{
//     console.log(message);
// })

// let orderPizza = new Promise((resolve, reject) => {
//     console.log("Pizza is being prepared...");
//     let success = false // Change this to false to simulate failure
//     setTimeout(() => {
//         if (success) {
//             console.log("Pizza is ready!");
//             resolve("Enjoy your pizza!");
//         }
//         else {
//             reject("Sorry, we ran out of ingredients!");
//         }
//     }, 3000)
// })

// orderPizza.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// })

let p1 = new Promise((resolve, reject) => {
    let success = true // Change this to false to simulate failure
    setTimeout(() => {
        if (success) {
            resolve("success 1");
        }
        else {
            reject("failure 1");
        }
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    let success = false // Change this to false to simulate failure
    setTimeout(() => {
        if (success) {
            resolve("success 2");
        }
        else {
            reject("failure 2");
        }
    }, 1000)
})
let p3 = new Promise((resolve, reject) => {
    let success = false // Change this to false to simulate failure
    setTimeout(() => {
        if (success) {
            resolve("success 3");
        }
        else {
            reject("failure 3");
        }
    }, 1000)
})
let p4 = new Promise((resolve, reject) => {
    let success = false // Change this to false to simulate failure
    setTimeout(() => {
        if (success) {
            resolve("success 4");
        }
        else {
            reject("failure 4");
        }
    }, 1000)
})

// Promise.all([p1, p2, p3, p4]).then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// })

// Promise.allSettled([p1, p2, p3, p4]).then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// })

// Promise.race([p1, p2, p3, p4]).then((message) => { // change the time of 1st one
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// })

Promise.any([p1, p2, p3, p4]).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})