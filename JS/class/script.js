// class Animal{
//     constructor(){
//         console.log("hi,how are you");
//     }
//     f1() {
//         console.log("this is f1");
//     }
// }

// class Cow extends Animal{
//     f2(){
//         console.log("this is f2");
//     }
// }

// let c = new Cow();
// c.f1();
// c.f2();


// class Animal{
//     constructor(number){
//         this.number = number
//         console.log("hi,how are you");
//     }
//     f1() {
//         console.log("this is f1",this.number);
//     }
// }

// class Cow extends Animal{
//     f2(){
//         console.log("this is f2");
//     }
// }

// let c = new Cow();
// c.f1();
// c.f2();

// class Animal{
//     constructor(number){
//         this.number = number
//         console.log("hi,how are you");
//     }
//     f1() {
//         console.log("this is f1",this.number);
//     }
// }

// class Cow extends Animal{
//     f2(){
//         console.log("this is f2");
//     }
// }

// let c = new Cow(5);
// c.f1();
// c.f2();


// class Animal{
//     constructor(){
//         console.log("hi,how are you");
//     }
//     f1() {
//         console.log("this is f1");
//     }
// }

// class Cow extends Animal{
//     constructor(){
//         super() // we should have to add super()
//         console.log("i am fine");
//     }
//     f2(){
//         console.log("this is f2");
//     }
// }

// let c = new Cow();
// c.f1();
// c.f2();


class Animal{
    constructor(number){
        this.number=number
        console.log("hi,how are you");
    }
    f1() {
        console.log("this is f1",this.number);
    }
}

class Cow extends Animal{
    constructor(number){
        super(number) // we should have to add super()
        console.log("i am fine");
    }
    f2(){
        console.log("this is f2");
    }
}

let c = new Cow(5);
c.f1();
c.f2();