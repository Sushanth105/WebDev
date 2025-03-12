async function main(){
    // adding play button to artist box
    let play1 = document.querySelectorAll(".artbox");
    play1.forEach((circle)=>{
        circle.addEventListener("mouseover", (e)=>{
            circle.children[0].children[0].style.display="block";
        } )
        circle.addEventListener("mouseout", (e)=>{
            circle.children[0].children[0].style.display="none";
        } )
    })

    // adding play button to artist box
    let play2 = document.querySelectorAll(".songbox");
    play2.forEach((square)=>{
        square.addEventListener("mouseover", (e)=>{
            square.children[0].children[0].style.display="block";
        } )
        square.addEventListener("mouseout", (e)=>{
            square.children[0].children[0].style.display="none";
        } )
    })

    // vertical Scrolling in both boxes
    let artboxs = document.querySelector(".artboxs");
    artboxs.addEventListener("wheel",(e)=>{
        e.preventDefault();
        e.currentTarget.scrollLeft += e.deltaY;
    })
    let songboxs = document.querySelector(".songboxs");
    songboxs.addEventListener("wheel",(e)=>{
        e.preventDefault();
        e.currentTarget.scrollLeft += e.deltaY
    })
    // fetching the song & image folder and storing the song links in songs and images
    let response1 = await fetch('Songs');
    let songDiv =document.createElement("div");
    songDiv.innerHTML=await response1.text()
    let response2 = await fetch('SImage');
    let imageDiv =document.createElement("div");
    imageDiv.innerHTML = await response2.text()

    let songs = songDiv.getElementsByTagName("a");
    let images = imageDiv.getElementsByTagName("a");

    let songbox = document.querySelectorAll(".songbox");
    for(let i=1; i<images.length; i++){
        document.getElementById(`s${i}`).style.backgroundImage= `url(${images[i].href})`;
        let songName = document.createElement("div");
        songName.className="songName";
        let s = images[i].innerText;
        songName.innerText = s.slice(0,s.length-5)
        songbox[i-1].appendChild(songName)
    }
}

main()