async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json();
    return data;
}

async function main() {
    console.log("data is loaded");
    console.log("data is getting");

    // getData().then((data)=>{
    //     console.log(data);
    //     console.log("data is readed");
    // })

    let data = await getData()
    console.log(data);
    console.log("data is readed");

}

main();