function main(){
    let play = document.querySelectorAll(".artbox");
    play.forEach((circle)=>{
        circle.addEventListener("mouseover", (e)=>{
            circle.children[0].children[0].style.display="block";
        } )
        circle.addEventListener("mouseout", (e)=>{
            circle.children[0].children[0].style.display="none";
        } )
    })
}

main()