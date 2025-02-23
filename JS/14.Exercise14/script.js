async function randomTime() {
    return new Promise((resolve) => {
        let rand = Math.floor((Math.random() * 7) + 1);
        setTimeout(() => {
            resolve()
        }, rand * 1000)
    })
}
async function main() {
    let words = ["Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "cleaning up"];

    let a = setInterval(() => {
        let div = document.querySelectorAll(".hack");
        if (div[div.length - 1].innerText.endsWith("...")) {
            div[div.length - 1].innerText = div[div.length - 1].innerText.slice(0, div[div.length - 1].innerText.length - 3)
        }
        else {
            div[div.length - 1].innerText = div[div.length - 1].innerText + "."
        }
    }, 100)

    for (let key of words) {
        let div = document.createElement("div")
        div.className = "hack";
        div.innerText = key
        document.body.appendChild(div);
        await randomTime();
        let last = document.querySelectorAll(".hack");
        last[last.length - 1].innerText = words[last.length - 1]
    }
    clearInterval(a)
}

main();
