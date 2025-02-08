function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let container = document.createElement("div");
    container.className = "container";

    let box = document.createElement("div");
    box.className = "box";
    box.style.backgroundImage = `url(${thumbnail})`;

    let time = document.createElement("div");
    time.className = "time"
    time.innerText = duration

    let content = document.createElement("div")
    content.className = "content"

    let titles = document.createElement("div")
    titles.className = "title"
    titles.innerText = title

    let imfo = document.createElement("div")
    imfo.className = "info"

    if (views >= 1000000) {
        views = `${(views / 1000000).toFixed(1)}M views`
    }
    else if (views >= 1000) {
        views = `${(views / 1000).toFixed(1)}K views`
    }
    else {
        views = `${views} views`
    }

    imfo.innerText = `${cName} . ${views} . ${monthsOld} months ago`

    document.body.appendChild(container)
    container.appendChild(box);
    container.appendChild(content);
    box.appendChild(time);
    content.appendChild(titles)
    content.appendChild(imfo)
}

// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
//     // Finish this function
//     let viewStr
//     if (views < 1000) {
//         viewStr = views;
//     }
//     else if (views > 1000000) {
//         viewStr = views / 1000000 + "M";
//     }
//     else {
//         viewStr = views / 1000 + "K";
//     }
//     let html = `<div class="card">
//     <div class="image">
//         <img src="${thumbnail}"
//             alt="">
//         <div class="capsule">${duration}</div>
//     </div>
//     <div class="text">
//         <h1>${title}</h1>
//         <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
//     </div> 
// </div>`

//     document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
// }


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560, 7, "1:31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")