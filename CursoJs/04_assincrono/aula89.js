// Sintaxe Async e Await

function primeiraFuncao() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Esperou a primeira instancia!');
            resolve()
        }, 2000);
    })
}

async function segundaFuncao() {
    console.log('Inicio');
    await primeiraFuncao()
    console.log('Terminou')
}

segundaFuncao();

// Pratico
function pegaUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => {console.log(err)})
}

async function mostraUsuario(id){
    try {
        const user = await pegaUser(id)
        console.log(`o nome do usuario é: ${user.data.first_name}`)
    } catch (err) {
        console.log(err)
    }

}

mostraUsuario(12);