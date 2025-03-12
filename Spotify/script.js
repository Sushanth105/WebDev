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
        // e.preventDefault();
        e.currentTarget.scrollLeft += e.deltaY;
    })
    let songboxs = document.querySelector(".songboxs");
    songboxs.addEventListener("wheel",(e)=>{
        // e.preventDefault();
        e.currentTarget.scrollLeft += e.deltaY
    })
    
    // fetching the song & image folder and storing the song links in songs and images

    let songImage ={
        1 : {
            name : 'Belageddu',
            song : "Songs/Belageddu.mp3",
            image : "SImage/Belageddu.jpeg"
        },
        2 : {
            name : 'Bisilu Kudureyondu',
            song : "Songs/BisiluKudureyondu.mp3",
            image : "SImage/BisiluKudureyondu.jpeg"
            
        },
        3 : {
            name : 'Butta Bomma',
            song : "Songs/ButtaBomma.mp3",
            image : "SImage/ButtaBomma.jpeg"  
        },
        4 : {
            name : 'Chammak Challo',
            song : "Songs/ChammakChallo.mp3",
            image : "SImage/ChammakChallo.jpeg"
        },
        5 : {
            name : 'Coca Cola',
            song : "Songs/CocaCola.mp3",
            image : "SImage/CocaCola.jpeg" 
        },
        6 : {
            name : 'Illuminati',
            song : "Songs/Illuminati.mp3",
            image : "SImage/Illuminati.jpeg"
        },
        7 : {
            name : 'Kutty Story',
            song : "Songs/KuttyStory.mp3",
            image : "SImage/KuttyStory.png"
        },
        8 : {
            name : 'Lungi Dance',
            song : "Songs/LungiDance.mp3",
            image : "SImage/LungiDance.jpeg"
        },
        9 : {
            name : 'Manasilaayo',
            song : "Songs/Manasilaayo.mp3",
            image : "SImage/Manasilaayo.jpeg"
            
        },
        10 : {
            name : 'One Two Three',
            song : "Songs/OneTwoThree.mp3",
            image : "SImage/OneTwoThree.jpeg"
            
        },
        11 : {
            name : 'Saree Ke Fall Sa',
            song : "Songs/SareeKeFallSa.mp3",
            image : "SImage/SareeKeFallSa.jpeg"
            
        },
        12 : {
            name : 'What Jhumka',
            song : "Songs/WhatJhumka.mp3",
            image : "SImage/WhatJhumka.jpeg"
            
        },
        13 : {
            name : 'Why This Kolaveri Di',
            song : "Songs/WhyThisKolaveriDi.mp3",
            image : "SImage/WhyThisKolaveriDi.jpeg"

        }
    }

    let songbox = document.querySelectorAll(".songbox");
    for(let i=1; i<=Object.keys(songImage).length; i++){
        document.getElementById(`s${i}`).style.backgroundImage= `url(${songImage[`${i}`].image})`;
        let songName = document.createElement("div");
        songName.className="songName";
        songName.innerText = songImage[`${i}`].name;
        songbox[i-1].appendChild(songName)
    }

    let currentSongPlay = null;
    let priSong = null;

    let playPause=document.querySelectorAll(".square")
    for(let i=0; i<playPause.length; i++){
        playPause[i].children[0].addEventListener("click",(e)=>{
            if(currentSongPlay && `${currentSongPlay.src}`.includes(songImage[i+1].song)){
                currentSongPlay.pause();
                currentSongPlay.currentTime = 0;
                currentSongPlay = null;
                priSong =null
                playPause[i].children[0].src="Images/play.svg"
            }
            else{
                if(currentSongPlay){
                    currentSongPlay.pause();
                    currentSongPlay.currentTime = 0;
                    playPause[priSong].children[0].src="Images/play.svg"
                }
                let audio = new Audio(songImage[i + 1].song);
                audio.play()
                currentSongPlay = audio;
                priSong = i;
                playPause[i].children[0].src="Images/pause.svg"
            }
        });
    }
}

main()