function lectura() {
    const request = fetch('https://jsonplaceholder.typicode.com/albums')
        .then((data) => data.json())
        .then((res) => res.forEach(album => {
            console.log(album.title);
        }))

    return request;
}

console.log(lectura());