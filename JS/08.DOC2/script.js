// let box = document.getElementsByClassName("box");
// console.log(box);
// box[2].style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "red" // returns the 1st element of class box
// document.querySelectorAll(".box")[1].style.backgroundColor = "red"
document.querySelectorAll(".box").forEach((e)=>{
    e.style.backgroundColor = "red"
})