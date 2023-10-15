const { Pessoa } = require('./mod1')

const p1 = new Pessoa('Matheus', 'Marques')

console.log(p1)

const axios = require('axios')

async function pegaFrase() {
    try {
        const resposta = await axios.get('https://api.adviceslip.com/advice')
        // .then((dados) => console.log(dados.data.slip.advice))
        const frase = resposta.data.slip.advice;
        console.log(frase)
        return frase;
    }catch(e) {
        console.log(`Erro: `,e)
        return null;
    }

}


pegaFrase()
