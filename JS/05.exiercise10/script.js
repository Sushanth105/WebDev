const word ={
    f : {
        1 : "Crazy",
        2 : "Amazing",
        3 : "Fire"
    },
    s : {
        1 : "Engine",
        2 : "Foods",
        3 : "Garments"
    },
    t : {
        1 : "Bros",
        2 : "Limited",
        3 : "Hub"
    }
};
function generateName(){
    let string="";
    for (const key in word) {
        if (Object.prototype.hasOwnProperty.call(word, key)) {
            string=string+select(key);
            string=string+" ";
        }
    }
    document.getElementById("name").innerText = string;
}

function select(s){
    let r=Math.floor(Math.random()*3)+1;
    return word[s][`${r}`];
}
