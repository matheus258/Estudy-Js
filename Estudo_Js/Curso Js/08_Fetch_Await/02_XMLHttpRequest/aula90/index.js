fetch("https://api.chucknorris.io/jokes/random")
.then((r) => {
    return r.json()
})
.then((data) => {
    console.log(data);
})