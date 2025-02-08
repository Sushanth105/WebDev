function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
}

let boxs=document.querySelectorAll(".box");

for (const element of boxs) {
    element.style.backgroundColor =  getRandomColor()
    element.style.color =  getRandomColor()
}
