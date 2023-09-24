// Fetch request na API GitHub

const userName = 'matheus258';

fetch (`https://api.github.com/users/${userName}`, {
    method:'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json()

}).then((data)=>{
    console.log(data)
}).catch((e)=> {
    console.log(`Houve algum Erro: ${e}`)
})