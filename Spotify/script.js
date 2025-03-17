let songImage = {
    1: {
        name: 'Belageddu',
        song: "Songs/Belageddu.mp3",
        image: "SImage/Belageddu.jpeg"
    },
    2: {
        name: 'Bisilu Kudureyondu',
        song: "Songs/BisiluKudureyondu.mp3",
        image: "SImage/BisiluKudureyondu.jpeg"

    },
    3: {
        name: 'Butta Bomma',
        song: "Songs/ButtaBomma.mp3",
        image: "SImage/ButtaBomma.jpeg"
    },
    4: {
        name: 'Chammak Challo',
        song: "Songs/ChammakChallo.mp3",
        image: "SImage/ChammakChallo.jpeg"
    },
    5: {
        name: 'Coca Cola',
        song: "Songs/CocaCola.mp3",
        image: "SImage/CocaCola.jpeg"
    },
    6: {
        name: 'Illuminati',
        song: "Songs/Illuminati.mp3",
        image: "SImage/Illuminati.jpeg"
    },
    7: {
        name: 'Kutty Story',
        song: "Songs/KuttyStory.mp3",
        image: "SImage/KuttyStory.png"
    },
    8: {
        name: 'Lungi Dance',
        song: "Songs/LungiDance.mp3",
        image: "SImage/LungiDance.jpeg"
    },
    9: {
        name: 'Manasilaayo',
        song: "Songs/Manasilaayo.mp3",
        image: "SImage/Manasilaayo.jpeg"

    },
    10: {
        name: 'One Two Three',
        song: "Songs/OneTwoThree.mp3",
        image: "SImage/OneTwoThree.jpeg"

    },
    11: {
        name: 'Saree Ke Fall Sa',
        song: "Songs/SareeKeFallSa.mp3",
        image: "SImage/SareeKeFallSa.jpeg"

    },
    12: {
        name: 'What Jhumka',
        song: "Songs/WhatJhumka.mp3",
        image: "SImage/WhatJhumka.jpeg"

    },
    13: {
        name: 'Why This Kolaveri Di',
        song: "Songs/WhyThisKolaveriDi.mp3",
        image: "SImage/WhyThisKolaveriDi.jpeg"

    }
}
function updateSongListColor(index) {
    let lists = document.querySelectorAll(".list");
    lists.forEach((list, i) => {
        if (i === index) {
            list.style.color = "white";  // Playing song in white
            list.style.fontWeight = "1000"  // Playing song in white
        } else {
            list.style.color = "rgb(173, 172, 172)";  // Other songs in default color
            list.style.fontWeight = "400"
        }
    });
}

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
function updateSongBar(cSong, cSongN) {
    let durations = document.querySelector(".durations");
    let songRange = document.getElementById("songRange");

    durations.children[1].innerText = songImage[cSongN].name; // Set song name

    // Ensure duration updates once metadata is loaded
    cSong.addEventListener("loadedmetadata", () => {
        durations.children[2].innerText = formatTime(cSong.duration);
        songRange.max = cSong.duration;
    })

    // Update current time dynamically
    cSong.addEventListener("timeupdate", () => {
        durations.children[0].innerText = formatTime(cSong.currentTime);
        songRange.value = cSong.currentTime;
    });

    songRange.addEventListener("input", () => {
        cSong.currentTime = songRange.value; // Update current time based on slider position
    });
}

function resetSongListColor() {
    let lists = document.querySelectorAll(".list");
    lists.forEach((list) => {
        list.style.color = "rgb(173, 172, 172)";  // Reset all to default color
        list.style.fontWeight = "400"
    });
}
async function main() {
    // adding play button to artist box
    let play1 = document.querySelectorAll(".artbox");
    document.getElementById("songRange").value = 0;
    play1.forEach((circle) => {
        circle.addEventListener("mouseover", (e) => {
            circle.children[0].children[0].style.display = "block";
        })
        circle.addEventListener("mouseout", (e) => {
            circle.children[0].children[0].style.display = "none";
        })
    })

    // adding play button to artist box
    let play2 = document.querySelectorAll(".songbox");
    play2.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            square.children[0].children[0].style.display = "block";
        })
        square.addEventListener("mouseout", (e) => {
            square.children[0].children[0].style.display = "none";
        })
    })

    // vertical Scrolling in both boxes
    let artboxs = document.querySelector(".artboxs");
    artboxs.addEventListener("wheel", (e) => {
        // e.preventDefault();
        e.currentTarget.scrollLeft += e.deltaY;
    })
    let songboxs = document.querySelector(".songboxs");
    songboxs.addEventListener("wheel", (e) => {
        // e.preventDefault();
        e.currentTarget.scrollLeft += e.deltaY
    })

    // fetching the song & image folder and storing the song links in songs and images

    let songbox = document.querySelectorAll(".songbox");
    for (let i = 1; i <= Object.keys(songImage).length; i++) {
        document.getElementById(`s${i}`).style.backgroundImage = `url(${songImage[`${i}`].image})`;
        let songName = document.createElement("div");
        songName.className = "songName";
        songName.innerText = songImage[`${i}`].name;
        songbox[i - 1].appendChild(songName)
    }

    let currentSongPlay = null;
    let priSong = null;

    let operations = document.querySelector(".operations");

    let playPause = document.querySelectorAll(".square")
    for (let i = 0; i < playPause.length; i++) {
        playPause[i].children[0].addEventListener("click", (e) => {
            if (currentSongPlay && `${currentSongPlay.src}`.includes(songImage[i + 1].song)) {
                currentSongPlay.pause();
                currentSongPlay.currentTime = 0;
                updateSongBar(currentSongPlay, i + 1)
                currentSongPlay = null;
                priSong = null
                playPause[i].children[0].src = "Images/play.svg";
                operations.children[1].src = "Images/Oplay.svg";
                resetSongListColor();
            }
            else {
                if (currentSongPlay) {
                    currentSongPlay.pause();
                    currentSongPlay.currentTime = 0;
                    playPause[priSong].children[0].src = "Images/play.svg"
                    operations.children[1].src = "Images/Oplay.svg";
                }
                let audio = new Audio(songImage[i + 1].song);
                audio.play()
                currentSongPlay = audio;
                priSong = i;
                playPause[i].children[0].src = "Images/pause.svg"
                operations.children[1].src = "Images/Opause.svg";
                updateSongListColor(i);
                updateSongBar(audio, i + 1)
            }
        });
    }

    let playContent = document.querySelector(".playContent");

    for (let i = 0; i < Object.keys(songImage).length; i++) {
        let list = document.createElement("div");
        list.className = "list";
        list.innerText = songImage[i + 1].name;
        playContent.appendChild(list);
        list.addEventListener("click", (e) => {
            if (priSong != null) {
                playPause[priSong].children[0].src = "Images/play.svg";
                operations.children[1].src = "Images/Oplay.svg";
                priSong = null;
            }
            if (currentSongPlay) {
                currentSongPlay.pause();
                currentSongPlay.currentTime = 0;
            }
            let audio = new Audio(songImage[i + 1].song);
            audio.play()
            currentSongPlay = audio;
            priSong = i
            playPause[i].children[0].src = "Images/pause.svg";
            operations.children[1].src = "Images/Opause.svg";
            updateSongListColor(i);
            updateSongBar(audio, i + 1)
        });
    }

    operations.children[1].addEventListener("click", (e) => {
        if (!currentSongPlay) {
            return
        }
        if (e.target.src.includes("Opause")) {
            e.target.src = "Images/Oplay.svg";
            currentSongPlay.pause();
        }
        else if (e.target.src.includes("Oplay")) {
            e.target.src = "Images/Opause.svg";
            currentSongPlay.play();
        }
    })

    operations.children[0].addEventListener("click", (e) => {
        if (priSong === 0 || priSong === null) {
            return
        }
        currentSongPlay.pause();
        currentSongPlay.currentTime = 0;
        playPause[priSong].children[0].src = "Images/play.svg";
        priSong -= 1;
        currentSongPlay = new Audio(songImage[priSong + 1].song);
        currentSongPlay.play();
        operations.children[1].src = "Images/Opause.svg";
        currentSongPlay.play();
        updateSongListColor(priSong);
        playPause[priSong].children[0].src = "Images/pause.svg";
        updateSongBar(currentSongPlay, priSong + 1)
    })
    operations.children[2].addEventListener("click", (e) => {
        if (priSong === Object.keys(songImage).length - 1 || priSong === null) {
            return
        }
        currentSongPlay.pause();
        currentSongPlay.currentTime = 0;
        playPause[priSong].children[0].src = "Images/play.svg";
        priSong += 1;
        currentSongPlay = new Audio(songImage[priSong + 1].song);
        currentSongPlay.play();
        operations.children[1].src = "Images/Opause.svg";
        currentSongPlay.play();
        updateSongListColor(priSong);
        playPause[priSong].children[0].src = "Images/pause.svg";
        updateSongBar(currentSongPlay, priSong + 1)
    })
}

main()