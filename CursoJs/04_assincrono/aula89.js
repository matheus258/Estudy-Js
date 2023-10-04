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

// udemy exemplo simples com Otávio Miranda.

function esperaAi(msg, tempo){

    // Funcao para retornar frase em determinado tempo;
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') {
            reject(`Erro: Bad value, '${msg}' não é um texto.`)
            return;
        }

        setTimeout(()=>{
            console.log(msg);
            resolve('');
        }, tempo);
    })

}

async function executa(){
    try{

        let b = await esperaAi('Primeira', 1000);

        let c = await esperaAi('Segunda', 2000)

        let d = await esperaAi('Terceira', 1000)

        const a = await esperaAi("A",3500);// Aguardando o resultado da promise
        const e = await esperaAi(1, 2000)

        const f = await esperaAi('Epa', 1000)
    } catch(e){console.log(e)}
}

executa();