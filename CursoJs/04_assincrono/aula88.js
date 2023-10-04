// Fetch request na API GitHub

document.write('<h1><strong>Fetch request na API GitHub</strong></h1>')
document.write('<h1><strong>Press F12</strong></h1>')

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